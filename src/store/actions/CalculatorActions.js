import {
  LOAD_BUTTON,
  LOAD_ANSWER,
  LOAD_C,
  LOAD_CE,
  ADD_TO_HISTORY,
  CLEAR_HISTORY,
} from '@constants/ActionsConstants';

export const loadButton = (num) => {
  return {
    type: LOAD_BUTTON,
    payload: num,
  };
};
export const loadC = () => {
  return {
    type: LOAD_C,
  };
};
export const loadCE = () => {
  return {
    type: LOAD_CE,
  };
};
export const loadAnswer = (answer) => {
  return {
    type: LOAD_ANSWER,
    payload: answer,
  };
};

export const addToHistory = (lastExpression, expressionWithResult) => {
  return {
    type: ADD_TO_HISTORY,
    lastExpression,
    expressionWithResult,
  };
};

export const clearHistory = () => {
  return {
    type: CLEAR_HISTORY,
  };
};
