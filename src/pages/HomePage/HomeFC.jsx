import React from 'react';
import CalculatorFC from '@components/Calculator/CalculatorFC';
import ControlPanelFC from '@components/ControlPanel/ControlPanelFC';
import HomeWrapper from './styles';

function HomeFC() {
  return (
    <HomeWrapper>
      <CalculatorFC />
      <ControlPanelFC />
    </HomeWrapper>
  );
}

export default HomeFC;
