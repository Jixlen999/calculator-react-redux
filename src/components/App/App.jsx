import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import HomeFC from '@pages/HomePage/HomeFC';
import HomeCC from '@pages/HomePage/HomeCC';
import Settings from '@pages/SettingsPage/Settings';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import Layout from '@components/Layout/Layout';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import theme from '@constants/ThemeConstants';
import AppWrapper from './styles';

function App() {
  const storeTheme = useSelector((state) => state.theme);
  const themeValue = storeTheme === 'dark' ? theme.DarkTheme : theme.LightTheme;

  const routes = [
    { path: '/', element: <HomeFC /> },
    { path: 'home-cc', element: <HomeCC /> },
    { path: 'settings', element: <Settings /> },
    { path: '*', element: <ErrorPage /> },
  ];

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
