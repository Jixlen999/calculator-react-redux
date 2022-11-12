import React from 'react';
import links from '@constants/NavLinks';
import { NavbarWrapper, NavbarLink } from './styles';

function Navbar() {
  return (
    <NavbarWrapper>
      {links.map((link) => (
        <NavbarLink key={link.text} to={link.to} data-cy={link['data-cy']} end={link.end ? link.end : ''}>
          {link.text}
        </NavbarLink>
      ))}
    </NavbarWrapper>
  );
}

export default Navbar;
