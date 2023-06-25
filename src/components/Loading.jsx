import React from 'react';
import styles from './global.module.css';

export const Loading = ({ isLoading, error, children }) => {
  return isLoading ? (
    <div className="mx-auto flex justify-center mt-6 overflow-y-hidden">
      <span className={`${styles.loader}`}></span>
    </div>
  ) : error ? (
    <div className="text-center mt-5">
      <h1 className="text-red-500 text-8xl tracking-widest">Error</h1>
      <p className="text-xl mt-2">{error}, please try to reload again.</p>
    </div>
  ) : (
    children
  );
};
