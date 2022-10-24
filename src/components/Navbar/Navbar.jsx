import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

const NavLink = styled.a`
    cursor: pointer;
    color: #afafaf;
    &:hover {
        color: #ececec;
        border-bottom: 1.5px solid white;
    }
`;

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
