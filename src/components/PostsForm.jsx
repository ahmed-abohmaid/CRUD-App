import React from 'react';

export const PostsForm = ({ formik, isLoading }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col mb-2">
        <label htmlFor="title" className="text-md mb-1">
          Title:
        </label>
        <input
          type="text"
          placeholder="Post title"
          id="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          className={`outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${
            formik.errors.title &&
            formik.touched.title &&
            'border-red-500 placeholder:text-red-500 focus:border-red-500'
          }`}
        />
        {formik.errors.title && formik.touched.title && (
          <p className="text-red-500 mt-[3px] pl-[5px] text-sm mb-0">
            {formik.errors.title}
          </p>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="description" className="text-md mb-1">
          Description:
        </label>
        <textarea
          type="text"
          placeholder="Add your description here"
          id="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          className={`outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${
            formik.errors.description &&
            formik.touched.description &&
            'border-red-500 placeholder:text-red-500 focus:border-red-500'
          }`}
        />
        {formik.errors.description && formik.touched.description && (
          <p className="text-red-500 mt-[3px] pl-[5px] text-sm mb-0">
            {formik.errors.description}
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
    </form>
  );
};
