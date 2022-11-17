import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import changeTheme from '@store/actions/ThemeActions';
import options from '@constants/Options';

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
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.text}
          </option>
        ))}
      </Select>
    </SwitcherWrapper>
  );
}

export default ThemeSwitcher;
