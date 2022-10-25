import { createStore } from 'redux';
import { themeReducer } from './reducers/ThemeReducer';

export const store = createStore(themeReducer);
