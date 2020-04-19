import styled from 'styled-components';

const ChartTitle = styled.h4`
  position: relative;
  padding: 0px 20px 15px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBg};
  margin: 0 -20px 15px;
`;

export default ChartTitle;
