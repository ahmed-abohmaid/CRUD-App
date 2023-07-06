import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/data';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';

export const AddPost = () => {
  const { isLoading } = useSelector((state) => state.postReducer);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isdescriptionEmpty, setIsDescriptionEmpty] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 500);

    if (!title && !description) {
      setIsTitleEmpty(true);
      setIsDescriptionEmpty(true);
      return;
    }
    if (!title) {
      setIsTitleEmpty(true);
      return;
    }
    if (!description) {
      setIsDescriptionEmpty(true);
      return;
    }

    dispatch(addPost({ id, title, description }))
      .unwrap() // To not submit if the server isn't work (read the docs.)
      .then(() => {
        setTitle('');
        setDescription('');
        setTimeout(() => navigate('/'), 1000);
      })
      .catch((error) => setError(error));
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      setIsTitleEmpty={setIsTitleEmpty}
      isTitleEmpty={isTitleEmpty}
      setIsDescriptionEmpty={setIsDescriptionEmpty}
      isdescriptionEmpty={isdescriptionEmpty}
      title={title}
      description={description}
      setTitle={setTitle}
      setDescription={setDescription}
      isLoading={isLoading}
      isError={error}
    />
  );
};
