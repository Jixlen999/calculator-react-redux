import { useSelector } from 'react-redux';
import theme from '@constants/ThemeConstants';

function useTheme() {
  const storeTheme = useSelector((state) => state.theme);
  return storeTheme === 'dark' ? theme.DarkTheme : theme.LightTheme;
}

export default useTheme;
