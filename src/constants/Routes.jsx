import React from 'react';

const HomeFC = React.lazy(() => import('@pages/HomePage/HomeFC'));
const HomeCC = React.lazy(() => import('@pages/HomePage/HomeCC'));
const Settings = React.lazy(() => import('@pages/SettingsPage'));
const ErrorPage = React.lazy(() => import('@pages/ErrorPage'));

const routes = [
  { path: '/', element: <HomeFC /> },
  { path: 'home-cc', element: <HomeCC /> },
  { path: 'settings', element: <Settings /> },
  { path: '*', element: <ErrorPage /> },
];

export default routes;
