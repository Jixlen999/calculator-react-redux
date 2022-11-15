import React from 'react';
import CalculatorCC from '@components/Calculator/CalculatorCC';
import ControlPanelCC from '@components/ControlPanel/ControlPanelCC';
import HomeWrapper from './styles';

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
