import React, { useState, useRef } from 'react';
import { array, object } from 'prop-types';
import { injectIntl } from 'react-intl';
import _ from 'lodash';
import CloseIcon from '@material-ui/icons/Close';

import { useOnClickOutside } from 'hooks/useOnClickOutside';
import messages from './messages';
import {
  Image,
  Name,
  Cases,
  List,
  ListWrapper,
  DropdownContent,
  Container,
  InputWrapper,
  Input,
  Main,
  RemoveButton,
  Button,
} from './DropDown/DropDown';

// eslint-disable-next-line react/prop-types
const RenderCountries = ({ countries, onClick }) => {
  const [text, setText] = useState('');
  if (!countries) return null;

  let modifiedCountries =
    text === ''
      ? _.sortBy(countries, ['cases'])
      : _.filter(countries, c =>
          c.country.toLowerCase().includes(text.toLowerCase()),
      );

  modifiedCountries =
    text === '' ? _.reverse(modifiedCountries) : modifiedCountries;

  return (
    <>
      <InputWrapper>
        <Input
          type="text"
          placeholder="Type country name..."
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </InputWrapper>

      <ListWrapper>
        {modifiedCountries.length ? (
          modifiedCountries.map(c => (
            <List
              key={c.country}
              onClick={() => {
                onClick(c.country);
                setText('');
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={c.countryInfo.flag} atl={c.country} />
                <Name>{c.country}</Name>
              </div>
              <Cases>{new Intl.NumberFormat('en-IN').format(c.cases)}</Cases>
            </List>
          ))
        ) : (
          <Name className="warning">
            No country name <span>{text}</span> found.
          </Name>
        )}
      </ListWrapper>
    </>
  );
};

const CountryDropdown = ({ countries, intl }) => {
  const [country, setCountry] = useState('');
  const [active, setActive] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  const ref = useRef();

  const onClickCountry = c => {
    setCountry(c);
    setActive(!active);
  };
  const removeCountry = () => {
    setCountry('');
    setBtnActive(false);
    setActive(false);
  };

  const showDropdown = () => {
    if (country === '') {
      setBtnActive(!btnActive);
    }
    setActive(!active);
  };

  useOnClickOutside(ref, () => {
    setActive(false)
    setBtnActive(false);
  });

  return (
    <Main>
      <Button
        onClick={showDropdown}
        active={btnActive}
        className={country !== '' ? 'active' : ''}
      >
        {country !== ''
          ? country
          : intl.formatMessage(messages.selectCountry)}
      </Button>

      <RemoveButton onClick={removeCountry} country={country}>
        <CloseIcon fontSize="small" color="error" />
      </RemoveButton>

      <Container className={active ? 'active' : ''} ref={ref}>
        <DropdownContent>
          <RenderCountries
            countries={countries}
            onClick={c => onClickCountry(c)}
          />
        </DropdownContent>
      </Container>
    </Main>
  );
};

CountryDropdown.propTypes = {
  countries: array,
  intl: object,
};

export default injectIntl(CountryDropdown);
