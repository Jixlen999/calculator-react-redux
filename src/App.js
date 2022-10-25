import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomeFC from '@pages/HomePage/HomeFC';
import HomeCC from '@pages/HomePage/HomeCC';
import Settings from '@pages/SettingsPage/Settings';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import Layout from '@components/Layout/Layout';
import { AppWrapper } from './AppStyles';
import { useSelector } from 'react-redux';
import { theme } from '@constants/ThemeConstants';

function App() {
    const storeTheme = useSelector((state) => state);
    const themeValue =
        storeTheme === 'dark' ? theme.DarkTheme : theme.LightTheme;

    return (
        <ThemeProvider theme={themeValue}>
            <AppWrapper>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<HomeFC />} />
                        <Route path='/home-cc' element={<HomeCC />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;
