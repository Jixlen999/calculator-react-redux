import React from 'react';
import links from '@constants/NavLinks';
import { NavbarWrapper, NavbarLink } from './styles';

function Navbar() {
  return (
    <NavbarWrapper>
      {links.map(({ text, to, dataCy, end }) => (
        <NavbarLink key={text} to={to} data-cy={dataCy} end={end || ''}>
          {text}
        </NavbarLink>
      ))}
    </NavbarWrapper>
  );
}

export default Navbar;
