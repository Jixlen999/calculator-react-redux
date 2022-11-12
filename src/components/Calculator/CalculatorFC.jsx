import React from 'react';
import DisplayFC from '@components/Display/DisplayFC';
import KeypadFC from '@components/Keypad/KeypadFC';
import CalculatorWrapper from './styles';

function CalculatorFC() {
  return (
    <CalculatorWrapper>
      <DisplayFC />
      <KeypadFC />
    </CalculatorWrapper>
  );
}

export default CalculatorFC;
