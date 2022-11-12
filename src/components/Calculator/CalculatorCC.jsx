import React from 'react';
import DisplayCC from '@components/Display/DisplayCC';
import KeypadCC from '@components/Keypad/KeypadCC';
import CalculatorWrapper from './styles';

class CalculatorCC extends React.PureComponent {
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
