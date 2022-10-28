import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { historyReducer } from './reducers/HistoryReducer';
import { themeReducer } from './reducers/ThemeReducer';
import { calculatorReducer } from './reducers/CalculatorReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    history: historyReducer,
    calculator: calculatorReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
