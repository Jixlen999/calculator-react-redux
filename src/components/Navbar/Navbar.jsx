import React from 'react';
import { NavbarWrapper, NavLink } from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavLink>Home(FC)</NavLink>
            <NavLink>Home(CC)</NavLink>
            <NavLink>Settings</NavLink>
        </NavbarWrapper>
    );
};

export default Navbar;
