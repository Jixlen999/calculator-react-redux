import React from 'react';
import { NavbarWrapper, NavbarLink } from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarLink to='/' data-cy='homeFC' end>
                Home(FC)
            </NavbarLink>
            <NavbarLink to='/home-cc' data-cy='homeCC'>
                Home(CC)
            </NavbarLink>
            <NavbarLink to='/settings' data-cy='settings'>
                Settings
            </NavbarLink>
        </NavbarWrapper>
    );
};

export default Navbar;
