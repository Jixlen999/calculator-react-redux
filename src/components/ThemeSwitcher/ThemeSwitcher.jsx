import React from 'react';
import { Select, SwitcherWrapper, Text } from './ThemeSwitcherStyles';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '@store/actions/Actions';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const actualTheme = useSelector((store) => store);

    const changeSelect = (e) => {
        dispatch(changeTheme(e.target.value));
    };
    return (
        <SwitcherWrapper>
            <Text>Switch Theme</Text>
            <Select value={actualTheme} onChange={changeSelect}>
                <option value='dark'>Dark Theme</option>
                <option value='light'>Light Theme</option>
            </Select>
        </SwitcherWrapper>
    );
};

export default ThemeSwitcher;
