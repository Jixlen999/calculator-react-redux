/* eslint-disable default-param-last */
import { LOAD_BUTTON, LOAD_ANSWER, LOAD_C, LOAD_CE } from '@constants/ActionsConstants';

const initialState = {
  num: '',
  answer: '',
  isDividedByZero: false,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BUTTON:
      return {
        ...state,
        num: state.num.concat(action.payload),
      };
    case LOAD_C:
      return initialState;
    case LOAD_CE:
      return {
        ...state,
        num: state.num.slice(0, -1),
        answer: '',
      };
    case LOAD_ANSWER:
      return {
        ...state,
        answer: action.payload,
      };

    default:
      return state;
  }
};

export default calculatorReducer;
