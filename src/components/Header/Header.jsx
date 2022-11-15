import React from 'react';
import Navbar from '@components/Navbar';
import { HeaderWrapper, Logo } from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Calculator App</Logo>
      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;
