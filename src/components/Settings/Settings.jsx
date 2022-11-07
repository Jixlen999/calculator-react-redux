import React from 'react';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import { PanelWrapper, Heading } from './SettingsStyles';
import ClearAllBtn from '../ClearAllBtn/ClearAllBtn';

const ControlPanel = () => {
    return (
        <PanelWrapper>
            <Heading>Settings</Heading>
            <ThemeSwitcher />
            <ClearAllBtn />
        </PanelWrapper>
    );
};

export default ControlPanel;
