import styled from 'styled-components';
import { DarkTheme } from '@constants/ThemeConstants';

export const KeyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${DarkTheme.mainTextColor};
    text-align: center;
    font-weight: 500;
    border-radius: 10px;
    border: 2px solid ${DarkTheme.btnBorder};
    background-color: ${DarkTheme.btnBackground};
    cursor: pointer;
    &:hover {
        background-color: ${DarkTheme.btnHover};
    }
`;
