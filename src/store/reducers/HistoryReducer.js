import { ADD_TO_HISTORY, CLEAR_HISTORY } from '@constants/ActionsConstants';

const initialState = {
  lastExpression: '',
  history: [],
};

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        lastExpression: action.lastExpression,
        history: [...state.history, action.expressionWithResult],
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};
