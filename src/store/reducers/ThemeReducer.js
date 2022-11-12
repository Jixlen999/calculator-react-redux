import { CHANGE_THEME } from '@constants/ActionsConstants';
export const themeReducer = (state = 'dark', action) => {
  if (action.type === CHANGE_THEME) {
    return action.theme;
  } else {
    return state;
  }
};
