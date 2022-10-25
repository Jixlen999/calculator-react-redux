import { Routes, Route } from 'react-router-dom';
import HomeFC from '@pages/HomePage/HomeFC';
import HomeCC from '@pages/HomePage/HomeCC';
import Settings from '@pages/SettingsPage/Settings';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import Layout from '@components/Layout/Layout';
import { AppWrapper } from './AppStyles';

function App() {
    return (
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
    );
}

export default App;
