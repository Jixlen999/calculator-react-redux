import React from 'react';
import HomeFC from '@pages/HomePage/HomeFC';
import HomeCC from '@pages/HomePage/HomeCC';
import Settings from '@pages/SettingsPage/Settings';
import ErrorPage from '@pages/ErrorPage/ErrorPage';

const routes = [
  { path: '/', element: <HomeFC /> },
  { path: 'home-cc', element: <HomeCC /> },
  { path: 'settings', element: <Settings /> },
  { path: '*', element: <ErrorPage /> },
];

export default routes;
