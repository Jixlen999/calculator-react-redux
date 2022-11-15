import React from 'react';
import { useDispatch } from 'react-redux';
import { clearHistory, loadC } from '@store/actions/CalculatorActions';
import ThemeSwitcher from '@components/ThemeSwitcher';
import ClearButton from '@components/ClearButton';
import { PanelWrapper, Heading } from './styles';

function ControlPanel() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(clearHistory());
    dispatch(loadC());
  };
  return (
    <PanelWrapper>
      <Heading>Settings</Heading>
      <ThemeSwitcher />
      <ClearButton clickHandler={clickHandler} dataCy="clear-all" width="300px">
        Clear All
      </ClearButton>
    </PanelWrapper>
  );
}

export default ControlPanel;
