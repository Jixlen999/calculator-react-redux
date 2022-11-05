import styled from 'styled-components';

export const KeyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: 10vh;
    font-size: 2rem;
    color: ${({ theme }) => theme.mainTextColor};
    text-align: center;
    font-weight: 500;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.btnBorder};
    background-color: ${({ theme }) => theme.btnBackground};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.btnHover};
    }
`;
