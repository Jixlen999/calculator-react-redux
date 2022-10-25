import React from 'react';
import DeleteHistoryBtn from '@components/DeleteHistoryBtn/DeleteHistoryBtn';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import { PanelWrapper, Heading } from './ControlPanelStyles';

const ControlPanel = () => {
    return (
        <PanelWrapper>
            <Heading>Settings</Heading>
            <ThemeSwitcher />
            <DeleteHistoryBtn />
        </PanelWrapper>
    );
};

export default ControlPanel;
