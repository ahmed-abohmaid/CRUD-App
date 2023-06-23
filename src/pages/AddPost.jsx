import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../state/data';
import { useNavigate } from 'react-router-dom';

export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 500);
    dispatch(addPost({ id, title, discription }));
    setTitle('');
    setDiscription('');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-3">
        <label htmlFor="title" className="text-md mb-1">
          Title:
        </label>
        <input
          type="text"
          placeholder="Post title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 focus:rounded-2xl placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="discription" className="text-md mb-1">
          Discription:
        </label>
        <textarea
          type="text"
          placeholder="Add your discription here"
          id="discription"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
          className="outline-none border-2 rounded-md border-black/20 pt-3 pl-3 h-[100px] transition-all duration-100 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in"
        />
      </div>
      <button
        className="mt-1 py-2 px-4 hover:bg-blue-600 duration-100 ease-in bg-blue-500 rounded-md text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
