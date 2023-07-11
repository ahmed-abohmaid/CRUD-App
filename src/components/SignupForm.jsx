import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = ({ formik, isLoading }) => {
  const errorsCheck = (type) => {
    if (formik.errors[type] && formik.touched[type]) {
      return 'border-red-500 placeholder:text-red-500 focus:border-red-500';
    }

    if (!formik.errors[type] && formik.touched[type]) {
      return 'border-green-500 placeholder:text-green-500 focus:border-green-500';
    }
  };
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col mb-2">
        <label htmlFor="title" className="text-md mb-1">
          Your Name:
        </label>
        <input
          type="text"
          placeholder="Add your Name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className={`outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${errorsCheck(
            'name'
          )}`}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="text-red-500 mt-[3px] pl-[5px] text-sm mb-0">
            {formik.errors.name}
          </p>
        )}
      </div>
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
          className={`outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${errorsCheck(
            'mail'
          )}`}
        />
        {formik.errors.mail && formik.touched.mail && (
          <p className="text-red-500 mt-[3px] pl-[5px] text-sm mb-0">
            {formik.errors.mail}
          </p>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="description" className="text-md mb-1">
          Password:
        </label>
        <input
          type="password"
          placeholder="Add your password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className={`outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${errorsCheck(
            'password'
          )}`}
        />
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
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      <span>
        {' '}
        or{' '}
        <Link to="/login" className="underline text-blue-500">
          Login
        </Link>
      </span>
    </form>
  );
};

export default SignupForm;
