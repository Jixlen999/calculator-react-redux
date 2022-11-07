import React from 'react';
import { NavbarWrapper, NavbarLink } from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarLink to='/' end>
                Home(FC)
            </NavbarLink>
            <NavbarLink to='/home-cc'>Home(CC)</NavbarLink>
            <NavbarLink to='/settings'>Settings</NavbarLink>
        </NavbarWrapper>
    );
};

export default Navbar;
