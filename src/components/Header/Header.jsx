import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import { HeaderWrapper, Logo } from './HeaderStyles';

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>Calculator App</Logo>
            <Navbar />
        </HeaderWrapper>
    );
};

export default Header;
