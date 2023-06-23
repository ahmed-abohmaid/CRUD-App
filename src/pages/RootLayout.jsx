import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RootLayout = () => {
  return (
    <>
      {/* For toasting messages */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="px-[50px]">
        <Header />
        <div className="overflow-x-auto w-[70%] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
