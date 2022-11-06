import React from 'react';
import HistoryCC from '@components/History/HistoryCC';
import CalculatorCC from '@components/Calculator/CalculatorCC';
import { HomeWrapper } from './HomeStyles';

class HomeCC extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <CalculatorCC />
                <HistoryCC />
            </HomeWrapper>
        );
    }
}
export default HomeCC;
