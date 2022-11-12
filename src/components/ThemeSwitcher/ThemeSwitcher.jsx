import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import changeTheme from '@store/actions/ThemeActions';
import { Select, SwitcherWrapper, Text } from './styles';

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const actualTheme = useSelector((store) => store.theme);

  const changeSelect = (e) => {
    dispatch(changeTheme(e.target.value));
  };
  return (
    <SwitcherWrapper>
      <Text>Switch Theme</Text>
      <Select value={actualTheme} onChange={changeSelect} data-cy="theme-switcher">
        <option value="dark">Dark Theme</option>
        <option value="light">Light Theme</option>
      </Select>
    </SwitcherWrapper>
  );
}

export default ThemeSwitcher;
