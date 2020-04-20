import React from 'react';
import { string, func, element } from 'prop-types';
import styled from 'styled-components';
import { listBefore, listAfter, linkAfter, linkBefore } from './Item.style';

const List = styled.li`
  position: relative;
  width: 100%;
  align-items: center;
  display: flex;
  padding: 7px 0;
  overflow: hidden;
  &.active {
    &:before {
      border: 9px solid ${({ theme }) => theme.colors.secondary};
      ${listBefore}
    }
    &:after {
      background: ${({ theme }) => theme.colors.secondary};
      ${listAfter}
    }
    a {
      &:before {
        border: 4px solid ${({ theme }) => theme.colors.lightBg};
        ${linkBefore}
      }
      &:after {
        border: 4px solid ${({ theme }) => theme.colors.lightBg};
        ${linkAfter}
      }
    }
  }
  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 10px;
    width: 100%;
    color: ${({ theme, active, path }) =>
      // eslint-disable-next-line indent
      active === path ? theme.colors.primary : theme.colors.tartiary};
    background: ${({ theme, active, path }) =>
      // eslint-disable-next-line indent
      active === path ? theme.colors.lightBg : 'transparent'};
  }
`;

const Item = ({ active, path, children }) => (
  <List active={active} className={active === path ? 'active' : ''} path={path}>
    {children}
  </List>
);

Item.propTypes = {
  active: string,
  path: string,
  onClick: func,
  children: element,
};

export default Item;
