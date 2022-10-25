import styled from 'styled-components';
import { DarkTheme, LightTheme } from '@constants/ThemeConstants';

export const HeaderWrapper = styled.div`
    height: 10%;
    width: 100%;
    padding: 15px;
    background-color: ${DarkTheme.headerColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 400;
`;

export const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: 400;
    color: #ececec;
`;
