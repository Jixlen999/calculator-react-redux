import styled from 'styled-components';

export const DeleteBtn = styled.div`
    width: 20%;
    height: 50px;
    text-align: center;
    font-size: 2rem;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.btnBorder};
    cursor: pointer;
    background-color: ${({ theme }) => theme.btnBackground};
    &:hover {
        background-color: ${({ theme }) => theme.btnHover};
    }
`;
