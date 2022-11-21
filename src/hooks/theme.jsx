import { useSelector } from 'react-redux';
import theme from '@src/theme';

function useTheme() {
  const storeTheme = useSelector((state) => state.theme);
  const { DarkTheme, LightTheme } = theme;

  const currentTheme = storeTheme === 'dark' ? DarkTheme : LightTheme;
  localStorage.setItem('theme', storeTheme === 'dark' ? 'dark' : 'light');
  return currentTheme;
}

export default useTheme;
