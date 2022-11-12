import React from 'react';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import ClearAllBtn from '@components/ClearAllBtn/ClearAllBtn';
import { PanelWrapper, Heading } from './styles';

function ControlPanel() {
  return (
    <PanelWrapper>
      <Heading>Settings</Heading>
      <ThemeSwitcher />
      <ClearAllBtn />
    </PanelWrapper>
  );
}

export default ControlPanel;
