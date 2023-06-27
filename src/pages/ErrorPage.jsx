import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import Header from '../components/Header';

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="px-[50px]">
      <Header />
      <div className="text-center mt-5">
        <h1 className="text-red-500 text-8xl tracking-widest">404</h1>
        <p className="text-xl">
          <span className="text-blue-400 text-5xl">Oops!</span> an unexpected
          error has occurred.
        </p>
        <p className="text-lg mt-5">
          <i>{error.statusText || error.message}</i>
        </p>

        <button
          onClick={() => navigate('/', { replace: true })}
          className="relative mt-5 border-2 border-blue-400 py-2 px-4 rounded-md before:transition-transform before:duration-200 before:ease-out before:bg-blue-400 before:w-full before:h-full before:absolute before:-z-10 before:top-0 before:left-0 before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left hover:text-white"
        >
          Home
        </button>
      </div>
    </div>
  );
};
