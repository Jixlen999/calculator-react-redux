import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const NavLink = styled.a`
    cursor: pointer;
    color: #afafaf;
    &:hover {
        color: #ececec;
        border-bottom: 1.5px solid white;
    }
`;
