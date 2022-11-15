import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '@constants/Routes';
import AppWrap from './styles';

function AppWrapper() {
  return (
    <AppWrap data-cy="app">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </Suspense>
    </AppWrap>
  );
}

export default AppWrapper;
