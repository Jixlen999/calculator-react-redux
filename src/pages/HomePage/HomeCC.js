import React from 'react';
import CalculatorCC from '@components/Calculator/CalculatorCC';
import { HomeWrapper } from './HomeStyles';
import ControlPanelCC from '../../components/ControlPanel/ControlPanelCC';

class HomeCC extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <CalculatorCC />
                <ControlPanelCC />
            </HomeWrapper>
        );
    }
}
export default HomeCC;
