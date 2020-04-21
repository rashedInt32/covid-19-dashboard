import styled from 'styled-components';

const TabWrapper = styled.div`
  posistion: relative;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-wrap: wrap;
  position: relative;

  @media (min-width: 1200px) {
    padding-top: 40px;
    position: absolute;
    top: 4px;
    right: 0;
  }
`;

export default TabWrapper;
