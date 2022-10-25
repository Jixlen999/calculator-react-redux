import styled from 'styled-components';
import { DarkTheme } from './constants/ThemeConstants';

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${DarkTheme.mainBackground};
    color: ${DarkTheme.mainTextColor};
`;
