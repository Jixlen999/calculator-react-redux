import React from 'react';
import styled from 'styled-components';
import HistoryFC from '@components/History/HistoryFC';
import CalculatorFC from '../Calculator/CalculatorFC';

const MainWrapper = styled.div`
    display: flex;
    padding: 15px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Main = () => {
    return (
        <MainWrapper>
            <CalculatorFC />
            <HistoryFC />
        </MainWrapper>
    );
};

export default Main;
