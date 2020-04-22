import React from 'react';
import styled from 'styled-components';


const Responsive = styled.div`
  posistion: relative;
  width: 100%;
  overflow: auto;
  max-height: 600px;

  table {
    width: 100%;
    min-width: 1100px;
  }
  .width-100 {
    width: 100px;
  }
  .width-49 {
    width: 49px;
  }
  .width-52 {
    width: 52px;
  }
  thead tr {
    th {
      text-align: left;
      padding-right: 10px;
    }
  }
`;

const Table = ({countries}) => {
  return (
    <Responsive>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Total Cases (new)</th>
            <th>Total Deaths (new)</th>
            <th>Recovered</th>
            <th>Active Cases</th>
            <th>Critical</th>
          </tr>
        </thead>
        <tbody>
          {countries &&
            countries.map(c => (
              <tr>
                <td>{c.country}</td>
                <td>
                  {c.cases} <span>{c.todayCases}</span>
                </td>
                <td>
                  {c.deaths} <span>{c.todayDeaths}</span>
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
}

export default Table;
