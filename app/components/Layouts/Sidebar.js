import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';

import logo from 'images/logo.svg';

import Item from './Item';

const SidebarWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 100%;
  flex: 0 0 70px;
  background: ${({ theme }) => theme.colors.secondary};
  &:before {
    content: '';
    position: absolute;
    right: -20px;
    top: 0;
    width: 20px;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin: 25px auto 20px;
  display: flex;
`;

const Items = styled.ul`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  flex-direction: column;
  padding-top: 30px;
`;

const Sidebar = ({ active }) => {
  return (
    <SidebarWrapper>
      <Logo src={logo} />
      <Items>
        <Item active={active} path="/">
          <Link to="/">
            <HomeOutlinedIcon />
          </Link>
        </Item>
        <Item active={active} path="/other">
          <Link to="/other">
            <HomeOutlinedIcon />
          </Link>
        </Item>
      </Items>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  active: string,
};

export default Sidebar;
