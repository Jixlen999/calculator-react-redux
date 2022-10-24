import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const HeaderWrapper = styled.div`
    height: 10%;
    width: 100%;
    padding: 15px;
    background-color: #434343;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 400;
`;

const Logo = styled.h1`
    font-size: 1.2rem;
    font-weight: 400;
    color: #ececec;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>Calculator App</Logo>
            <Navbar />
        </HeaderWrapper>
    );
};

export default Header;
