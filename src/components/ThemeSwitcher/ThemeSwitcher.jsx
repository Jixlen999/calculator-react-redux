import React from 'react';
import { Select, SwitcherWrapper, Text } from './ThemeSwitcherStyles';

const ThemeSwitcher = () => {
    return (
        <SwitcherWrapper>
            <Text>Switch Theme</Text>
            <Select>
                <option value='dark'>Dark Theme</option>
                <option value='light'>Light Theme</option>
            </Select>
        </SwitcherWrapper>
    );
};

export default ThemeSwitcher;
