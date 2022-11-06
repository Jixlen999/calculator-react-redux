import React from 'react';
import DisplayCC from '@components/Display/DisplayCC';
import KeypadCC from '@components/Keypad/KeypadCC';
import { CalculatorWrapper } from './CalculatorStyles';

class CalculatorCC extends React.Component {
    render() {
        return (
            <CalculatorWrapper>
                <DisplayCC />
                <KeypadCC />
            </CalculatorWrapper>
        );
    }
}

export default CalculatorCC;
