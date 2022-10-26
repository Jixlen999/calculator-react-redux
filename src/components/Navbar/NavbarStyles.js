import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const NavLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.navLinkColor};
    &:hover {
        color: #ececec;
        border-bottom: 1.5px solid white;
    }
`;
