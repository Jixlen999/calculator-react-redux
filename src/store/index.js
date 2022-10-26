import { createStore, combineReducers } from 'redux';
import { historyReducer } from './reducers/HistoryReducer';
import { themeReducer } from './reducers/ThemeReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    history: historyReducer,
});
export const store = createStore(rootReducer);
