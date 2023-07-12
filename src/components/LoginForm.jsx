import React from 'react';
import { Link } from 'react-router-dom';
import PasswordField from './PasswordField';

const LoginForm = ({ formik, isLoading }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col mb-2">
        <label htmlFor="title" className="text-md mb-1">
          Email:
        </label>
        <input
          type="mail"
          placeholder="Add your Email"
          id="mail"
          onChange={formik.handleChange}
          value={formik.values.mail}
          className={`outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${
            formik.errors.mail &&
            formik.touched.mail &&
            'border-red-500 placeholder:text-red-500 focus:border-red-500'
          }`}
        />
        {formik.errors.mail && formik.touched.mail && (
          <p className="text-red-500 mt-[3px] pl-[5px] text-sm mb-0">
            {formik.errors.mail}
          </p>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <PasswordField formik={formik} />
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-500 mt-[3px] pl-[5px] text-sm mb-0">
            {formik.errors.password}
          </p>
        )}
      </div>
      <button
        className="mt-1 py-2 px-4 hover:bg-blue-500 duration-100 ease-in bg-blue-600 rounded-md text-white"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
      <span>
        {' '}
        or{' '}
        <Link to="/signup" className="underline text-blue-500">
          Signup
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
