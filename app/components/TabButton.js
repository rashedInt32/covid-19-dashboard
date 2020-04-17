import { bool } from 'prop-types';
import styled from 'styled-components';

const TabButton = styled.button`
  position: relative;
  padding: 7px 15px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.grey};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.grey};
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : 'transparent'};
`;

TabButton.propTypes = {
  action: bool,
};

export default TabButton;
