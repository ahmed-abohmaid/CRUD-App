import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div className="px-[50px]">
      <Header />
      <div className="overflow-x-auto w-[70%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
