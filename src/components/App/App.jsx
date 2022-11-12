import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import Layout from '@components/Layout/Layout';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import theme from '@constants/ThemeConstants';
import routes from '@constants/Routes';
import AppWrapper from './styles';

function App() {
  const storeTheme = useSelector((state) => state.theme);
  const themeValue = storeTheme === 'dark' ? theme.DarkTheme : theme.LightTheme;

  return (
    <ThemeProvider theme={themeValue}>
      <ErrorBoundary>
        <AppWrapper data-cy="app">
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map((route) => (
                <Route path={route.path} element={route.element} key={route.path} />
              ))}
            </Route>
          </Routes>
        </AppWrapper>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
