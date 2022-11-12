import React from 'react';
import { NavbarWrapper, NavbarLink } from './styles';

function Navbar() {
  const links = [
    { to: '/', 'data-cy': 'homeFC', end: true, text: 'Home(FC)' },
    { to: '/home-cc', 'data-cy': 'homeCC', end: false, text: 'Home(CC)' },
    { to: '/settings', 'data-cy': 'settings', end: false, text: 'Settings' },
  ];
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
