import React from 'react';
import CalculatorFC from '@components/Calculator/CalculatorFC';
import { HomeWrapper } from './HomeStyles';
import ControlPanelFC from '../../components/ControlPanel/ControlPanelFC';

const HomeFC = () => {
    return (
        <HomeWrapper>
            <CalculatorFC />
            <ControlPanelFC />
        </HomeWrapper>
    );
};

export default HomeFC;
