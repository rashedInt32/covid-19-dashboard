import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  &.container {
    width: calc(100% + 16px);
    margin: -8px;
  }
  &.main {
    maring: 0;
    width: 100%;
  }
  &.lg-3 {
    padding: 8px;
    width: 50%%;
    max-width: 50%;
    flex-basis: 50%;

    @media (min-width: 768px) {
      flex-grow: 0;
      max-width: 50%;
      flex-basis: 50%;
    }

    @media (min-width: 960px) {
      flex-grow: 0;
      max-width: 25%;
      flex-basis: 25%;
    }
  }
  &.lg-4 {
    padding: 8px;
    width: 100%;
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;

    @media (min-width: 768px) {
      flex-grow: 0;
      max-width: 50%;
      flex-basis: 50%;
    }
    @media (min-width: 960px) {
      flex-grow: 0;
      max-width: 33.333%;
      flex-basis: 33.333%;
    }
  }
`;

export default Grid;
