import React from 'react';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import useTheme from '@hooks/theme';
import AppWrapper from '@components/AppWrapper/AppWrapper';
import Header from '@components/Header/Header';

function App() {
  const themeValue = useTheme();
  return (
    <ThemeProvider theme={themeValue}>
      <ErrorBoundary>
        <Header />
        <AppWrapper />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
