import styled from 'styled-components';

const TabWrapper = styled.div`
  posistion: relative;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    padding-top: 40px;
  }
`;

export default TabWrapper;
