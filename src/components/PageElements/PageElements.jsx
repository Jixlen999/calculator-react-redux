import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';

function PageElements() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default PageElements;