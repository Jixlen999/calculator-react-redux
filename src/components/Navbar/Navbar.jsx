import React from 'react';
import { NavbarWrapper, NavLink } from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavLink to={'/'}>Home(FC)</NavLink>
            <NavLink to={'/home-cc'}>Home(CC)</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
        </NavbarWrapper>
    );
};

export default Navbar;
