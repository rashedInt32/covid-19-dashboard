import React, { useState, useRef } from 'react';
import { array, object, func, bool } from 'prop-types';
import { injectIntl } from 'react-intl';
import _ from 'lodash';

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
  TriggerContent,
} from './DropDown/DropDown';
import { CountryContext } from '../Context/CountryContext';

// eslint-disable-next-line react/prop-types
const RenderCountries = ({ countries, onClick, selectedCountry, showFlag }) => {
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
                onClick(c);
                setText('');
              }}
              className={c.country === selectedCountry ? 'active' : ''}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {showFlag && (
                  <Image src={c.countryInfo.flag} atl={c.country} />
                )}
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

const CountryDropdown = ({ countries, intl, onClick, onRemove, disabled }) => {
  const [country, setCountry] = useState('');
  const [active, setActive] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  const ref = useRef();

  const onClickCountry = c => {
    setCountry(c.country);
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
      <TriggerContent>
        <Button
          onClick={showDropdown}
          active={btnActive}
          className={country !== '' ? 'active' : ''}
          disabled={disabled}
        >
          {country !== ''
            ? country
            : intl.formatMessage(messages.selectCountry)}
        </Button>

        <RemoveButton
          onClick={() => {
            removeCountry();
            onRemove();
          }}
          country={country}
        >
          <p>&times;</p>
        </RemoveButton>
      </TriggerContent>

      <Container className={active ? 'active' : ''} ref={ref}>
        <DropdownContent>
          <RenderCountries
            countries={countries}
            selectedCountry={country}
            showFlag={active}
            onClick={c => {
              onClick(c);
              onClickCountry(c);
            }}
          />
        </DropdownContent>
      </Container>
    </Main>
  );
};

CountryDropdown.propTypes = {
  countries: array,
  intl: object,
  onClick: func,
  onRemove: func,
  disabled: bool,
};

export default injectIntl(CountryDropdown);
