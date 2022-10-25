import React from 'react';
import HistoryFC from '@components/History/HistoryFC';
import CalculatorFC from '@components/Calculator/CalculatorFC';
import { MainWrapper } from './MainStyles';

const Main = () => {
    return (
        <MainWrapper>
            <CalculatorFC />
            <HistoryFC />
        </MainWrapper>
    );
};

export default Main;
