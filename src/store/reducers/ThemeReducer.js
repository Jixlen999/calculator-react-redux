import { CHANGE_THEME } from '@constants/ActionsConstants';

const themeReducer = (state = localStorage.getItem('theme'), action) => {
  if (action.type === CHANGE_THEME) {
    return action.theme;
  }
  return state;
};

export default themeReducer;
