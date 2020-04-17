import React, { useState } from 'react';
import { array, func } from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

// image, name, totalcases

const Image = styled.img`
  position: relative;
  width: 25px;
  margin-right: 25px;
`;

const Name = styled.h5`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  &.warning {
    width: 100%;
    padding: 12px 15px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.warningLight};
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0 6px;
  }
`;

const Cases = styled(Name)`
  color: ${({ theme }) => theme.colors.warning};
`;

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 30px;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ListWrapper = styled.ul`
  positions: relative;
  padding: 0;
  margin: 0;
`;

const DropdownContent = styled.div`
  position: relative;
  border-radius: 15px;
  width: 400px;
  max-height: 450px;
  overflow-x: scroll;
  padding: 20px;
  padding-top: 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 15px 3px rgba(189, 189, 189, 0.1);
`;

const InputWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 20px 0 15px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 30px;
  padding: 5px 20px;
  border: 2px solid ${({ theme }) => theme.colors.successLight};
  box-sizing: border-box;
  transition: all .3s ease;
  background: ${({ theme }) => theme.colors.white};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.success};
  }
`;

// eslint-disable-next-line react/prop-types
const RenderCountries = ({ countries }) => {
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

  const onChange = e => {
    setText(e.target.value);
  };

  // eslint-disable-next-line consistent-return
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
            <List key={c.country}>
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

const CountryDropdown = ({ countries, onClick }) => {
  return (
    <DropdownContent>
      <RenderCountries countries={countries} />
    </DropdownContent>
  );
};

CountryDropdown.propTypes = {
  countries: array,
  onClick: func,
}

export default CountryDropdown;
