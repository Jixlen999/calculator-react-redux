import React from 'react';
import styled from 'styled-components';
import { DarkTheme, LightTheme } from '@constants/ThemeConstants';

const DeleteBtn = styled.div`
    width: 20%;
    height: 50px;
    text-align: center;
    font-size: 2rem;
    border-radius: 5px;
    border: 2px solid ${DarkTheme.btnBorder};
    cursor: pointer;
    background-color: ${DarkTheme.btnBackground};
    &:hover {
        background-color: ${DarkTheme.btnHover};
    }
`;

const DeleteHistoryBtn = () => {
    return <DeleteBtn>Delete History</DeleteBtn>;
};

export default DeleteHistoryBtn;
