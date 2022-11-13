import React from 'react';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import useTheme from '@hooks/theme';
import AppWrapper from '@components/AppWrapper/AppWrapper';

function App() {
  const themeValue = useTheme();
  return (
    <ThemeProvider theme={themeValue}>
      <ErrorBoundary>
        <AppWrapper />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
