import { bool } from 'prop-types';
import styled from 'styled-components';

const TabButton = styled.button`
  position: relative;
  padding: 7px 15px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  outline: 0;
  border: 2px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.grey};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.grey};
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : 'transparent'};

  &:disabled {
    opacity: 0.4;
    cursor: no-drop;
  }

  @media (max-width: 576px) {
    margin-left: 3px;
    margin-bottom: 5px;
  }
`;

TabButton.propTypes = {
  action: bool,
};

export default TabButton;
