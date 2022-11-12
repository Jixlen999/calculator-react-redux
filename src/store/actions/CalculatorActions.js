import { LOAD_BUTTON, LOAD_ANSWER, LOAD_C, LOAD_CE, ADD_TO_HISTORY, CLEAR_HISTORY } from '@constants/ActionsConstants';

export const loadButton = (num) => ({
  type: LOAD_BUTTON,
  payload: num,
});

export const loadC = () => ({
  type: LOAD_C,
});

export const loadCE = () => ({
  type: LOAD_CE,
});

export const loadAnswer = (answer) => ({
  type: LOAD_ANSWER,
  payload: answer,
});

export const addToHistory = (lastExpression, expressionWithResult) => ({
  type: ADD_TO_HISTORY,
  lastExpression,
  expressionWithResult,
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});
