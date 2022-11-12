/* eslint-disable default-param-last */
import { CHANGE_THEME } from '@constants/ActionsConstants';

const themeReducer = (state = 'dark', action) => {
  if (action.type === CHANGE_THEME) {
    return action.theme;
  }
  return state;
};

export default themeReducer;
