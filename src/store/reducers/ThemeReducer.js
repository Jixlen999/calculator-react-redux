/* eslint-disable default-param-last */
import { CHANGE_THEME } from '@constants/ActionsConstants';

// eslint-disable-next-line no-undef
const themeReducer = (state = localStorage.getItem('theme'), action) => {
  if (action.type === CHANGE_THEME) {
    return action.theme;
  }
  return state;
};

export default themeReducer;
