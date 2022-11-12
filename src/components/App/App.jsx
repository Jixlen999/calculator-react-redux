import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PageElements from '@components/PageElements/PageElements';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import routes from '@constants/Routes';
import useTheme from '@hooks/theme';
import AppWrapper from './styles';

function App() {
  const themeValue = useTheme();
  return (
    <ThemeProvider theme={themeValue}>
      <ErrorBoundary>
        <AppWrapper data-cy="app">
          <Routes>
            <Route path="/" element={<PageElements />}>
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
