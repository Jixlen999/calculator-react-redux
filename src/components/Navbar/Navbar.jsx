import React from 'react';
import links from '@constants/NavLinks';
import { NavbarWrapper, NavbarLink } from './styles';

function Navbar() {
  return (
    <NavbarWrapper>
      {links.map((link) => {
        const { text, to, dataCy, end } = link;
        return (
          <NavbarLink key={text} to={to} data-cy={dataCy} end={end || ''}>
            {text}
          </NavbarLink>
        );
      })}
    </NavbarWrapper>
  );
}

export default Navbar;
