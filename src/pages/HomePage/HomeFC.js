import React from 'react';
import HistoryFC from '@components/History/HistoryFC';
import CalculatorFC from '@components/Calculator/CalculatorFC';
import { HomeWrapper } from './HomeStyles';

const HomeFC = () => {
    return (
        <HomeWrapper>
            <CalculatorFC />
            <HistoryFC />
        </HomeWrapper>
    );
};

export default HomeFC;
