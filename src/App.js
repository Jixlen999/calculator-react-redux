import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import HomeFC from '@pages/HomePage/HomeFC';
import HomeCC from '@pages/HomePage/HomeCC';
import Settings from '@pages/SettingsPage/Settings';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import Layout from '@components/Layout/Layout';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { AppWrapper } from './AppStyles';

import { theme } from '@constants/ThemeConstants';

function App() {
    const storeTheme = useSelector((state) => state.theme);
    const themeValue =
        storeTheme === 'dark' ? theme.DarkTheme : theme.LightTheme;

    return (
        <ThemeProvider theme={themeValue}>
            <ErrorBoundary>
                <AppWrapper>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<HomeFC />} />
                            <Route path='home-cc' element={<HomeCC />} />
                            <Route path='settings' element={<Settings />} />
                            <Route path='*' element={<ErrorPage />} />
                        </Route>
                    </Routes>
                </AppWrapper>
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App;
