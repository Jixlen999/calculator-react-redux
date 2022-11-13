import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageElements from '@components/PageElements/PageElements';
import routes from '@constants/Routes';
import AppWrap from './styles';

function AppWrapper() {
  return (
    <AppWrap data-cy="app">
      <Routes>
        <Route path="/" element={<PageElements />}>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>
      </Routes>
    </AppWrap>
  );
}

export default AppWrapper;
