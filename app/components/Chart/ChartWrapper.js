import styled from 'styled-components';
const ChartWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  padding: 15px 20px 40px;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

export default ChartWrapper;
