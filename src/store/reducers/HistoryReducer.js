import { ADD_TO_HISTORY } from '@constants/ActionsConstants';

const initialState = {
    lastExpression: '',
    history: [],
};

export const historyReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_HISTORY) {
        return {
            ...state,
            lastExpression: action.lastExpression,
            history: [...state.history, action.expressionWithResult],
        };
    } else {
        return state;
    }
};
