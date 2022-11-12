/* eslint-disable no-undef */
import { useSelector } from 'react-redux';
import theme from '@constants/ThemeConstants';

function useTheme() {
  const storeTheme = useSelector((state) => state.theme);

  const currentTheme = storeTheme === 'dark' ? theme.DarkTheme : theme.LightTheme;
  localStorage.setItem('theme', storeTheme === 'dark' ? 'dark' : 'light');
  return currentTheme;
}

export default useTheme;
