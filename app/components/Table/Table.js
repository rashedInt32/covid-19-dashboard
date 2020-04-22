import React from 'react';
import styled from 'styled-components';
import { array } from 'prop-types';
import _ from 'lodash';


const Responsive = styled.div`
  posistion: relative;
  width: 100%;
  overflow: auto;
  max-height: 600px;
  border-radius: 8px;
  border: 1px solid #ddd;

  table {
    width: 100%;
    min-width: 960px;
  }
  .width-100 {
    width: 250px;
    @media (max-width: 576px) {
      width: 170px;
    }
  }
  .width-49 {
    width: 131px;
  }
  .width-52 {
    width: 100px;
  }
  thead tr {
    th {
      position: sticky;
      top: 0;
      text-align: left;
      padding: 15px 20px;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  tbody tr {
    &:nth-child(odd) {
      background: ${({ theme }) => theme.colors.lightBg};
    }
    td {
      padding: 12px 20px;
      border-bottom: 1px solid #ddd;
      color: #666;
      span {
        padding: 0px 6px;
        border: 2px solid ${({ theme }) => theme.colors.dangerLight};
        border-radius: 15px;
        margin-left: 10px;
        color: ${({ theme }) => theme.colors.danger};
      }
    }
  }
`;

const Table = ({ countries }) => {
  let sortCountries = _.sortBy(countries, ['cases']);
  sortCountries = _.reverse(sortCountries);
  return (
    <Responsive>
      <table>
        <thead>
          <tr>
            <th className="width-100">Country</th>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th className="width-49">Recovered</th>
            <th>Active Cases</th>
            <th className="width-52">Critical</th>
          </tr>
        </thead>
        <tbody>
          {sortCountries &&
            sortCountries.map(c => (
              <tr key={c.country}>
                <td>{c.country}</td>
                <td>
                  {c.cases}
                  {c.todayCases !== 0 && <span>+{c.todayCases}</span>}
                </td>
                <td>
                  {c.deaths}
                  {c.todayDeaths !== 0 && <span>+{c.todayDeaths}</span>}
                </td>
                <td>{c.recovered}</td>
                <td>{c.active}</td>
                <td>{c.critical}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Responsive>
  );
};

Table.propTypes = {
  countries: array,
};

export default Table;
