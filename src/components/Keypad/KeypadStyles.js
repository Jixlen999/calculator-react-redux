import styled from 'styled-components';

export const KeypadWrapper = styled.div`
    width: 100%;
    height: 85%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10%;
    justify-content: space-between;
    padding: 20px 30px 0px 30px;
`;
