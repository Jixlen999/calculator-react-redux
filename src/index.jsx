import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/index';
import App from '@components/App';
import Global from './style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);
