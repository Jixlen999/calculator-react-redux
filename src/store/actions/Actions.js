import { CHANGE_THEME, ADD_TO_HISTORY } from '@constants/ActionsConstants';

export const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        theme,
    };
};

export const addToHistory = (expression) => {
    return {
        type: ADD_TO_HISTORY,
        expression,
    };
};
