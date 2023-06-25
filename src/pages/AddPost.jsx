import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../state/data';
import { useNavigate } from 'react-router-dom';

export const AddPost = () => {
  const { isLoading, error } = useSelector((state) => state.postReducer);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isdescriptionEmpty, setIsDescriptionEmpty] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 500);

    if (!title && !description) {
      setIsTitleEmpty(true);
      return setIsDescriptionEmpty(true);
    } else if (!title) {
      return setIsTitleEmpty(true);
    } else if (!description) {
      return setIsDescriptionEmpty(true);
    }

    dispatch(addPost({ id, title, description }))
      .unwrap() // To not submit if the server isn't work (read the docs.)
      .then(() => {
        setTitle('');
        setDescription('');
        setTimeout(() => navigate('/'), 1000);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-2">
        <label htmlFor="title" className="text-md mb-1">
          Title:
        </label>
        <input
          type="text"
          placeholder="Post title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setIsTitleEmpty(false);
          }}
          className={`outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${
            isTitleEmpty && 'border-red-500 placeholder:text-red-500'
          }`}
        />
        {isTitleEmpty && (
          <p className="text-red-500 mt-[3px] pl-[5px] text-sm mb-0">
            This field is required.
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
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setIsDescriptionEmpty(false);
          }}
          className={`outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${
            isdescriptionEmpty && 'border-red-500 placeholder:text-red-500'
          }`}
        />
        {isdescriptionEmpty && (
          <p className="text-red-500 mt-[3px] pl-[5px] text-sm mb-0">
            This field is required.
          </p>
        )}
      </div>
      <button
        className="mt-1 py-2 px-4 hover:bg-blue-600 duration-100 ease-in bg-blue-500 rounded-md text-white"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Loading' : 'Submit'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}, please try again.</p>}
    </form>
  );
};
