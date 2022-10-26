import { ADD_TO_HISTORY } from '@constants/ActionsConstants';

export const historyReducer = (state = [], action) => {
    if (action.type === ADD_TO_HISTORY) {
        return [...state, action.expression];
    } else {
        return state;
    }
};
