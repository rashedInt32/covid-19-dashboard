import React from 'react';
import styled from 'styled-components';

import logo from 'images/logo.svg';

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
  margin: 20px auto;
  display: flex;
`;

const Sidebar = () => (
  <SidebarWrapper>
    <Logo src={logo} />
  </SidebarWrapper>
);

export default Sidebar;
