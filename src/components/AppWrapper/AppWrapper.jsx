import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '@constants/Routes';
import AppWrap from './styles';

const PageElements = React.lazy(() => import('@components/PageElements/PageElements'));

function AppWrapper() {
  return (
    <AppWrap data-cy="app">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<PageElements />}>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} key={route.path} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </AppWrap>
  );
}

export default AppWrapper;
