import styled from 'styled-components';
import { DarkTheme } from '@constants/ThemeConstants';

export const SwitcherWrapper = styled.div`
    margin-bottom: 20px;
`;

export const Select = styled.select`
    width: 20%;
    height: 50px;
    background-color: ${DarkTheme.btnBackground};
    color: ${DarkTheme.mainTextColor};
    text-align: center;
    font-size: 2rem;
    border-radius: 5px;
    border: 2px solid ${DarkTheme.btnBorder};
    cursor: pointer;
`;

export const Text = styled.p`
    color: ${DarkTheme.mainTextColor};
    font-size: 1.2rem;
    cursor: pointer;
`;
