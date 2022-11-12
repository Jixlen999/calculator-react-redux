import { CHANGE_THEME } from '@constants/ActionsConstants';

export const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    theme,
  };
};
