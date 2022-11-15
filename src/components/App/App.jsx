import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '@constants/Routes';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '@components/ErrorBoundary';
import useTheme from '@hooks/theme';
import Header from '@components/Header';
import Layout from '@components/Layout';

function App() {
  const themeValue = useTheme();
  return (
    <ThemeProvider theme={themeValue}>
      <ErrorBoundary>
        <Header />
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={route.element} key={route.path} />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
