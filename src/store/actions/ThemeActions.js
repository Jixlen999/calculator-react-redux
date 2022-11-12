import { CHANGE_THEME } from '@constants/ActionsConstants';

const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  theme,
});

export default changeTheme;
