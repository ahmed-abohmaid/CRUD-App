import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/data';
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { clearRecords } from '../store/postSlice';

export const AddPost = () => {
  const { isLoading } = useSelector((state) => state.postReducer);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 500);

    // For error handling
    if (!title && !description) {
      setTitleError("This field is required.");
      setDescriptionError("This field is required.");
      setTimeout(() => {
        setTitleError(null);
        setDescriptionError(null);
      }, 6000);
      return;
    }
    if (!title) {
      setTitleError("This field is required.");
      setTimeout(() => {
        setTitleError(null);
      }, 6000);
      return;
    }
    if (!description) {
      setDescriptionError("This field is required.");
      setTimeout(() => {
        setDescriptionError(null);
      }, 6000);
      return;
    }

    dispatch(addPost({ id, title, description }))
      .unwrap() // To not submit if the server isn't work (read the docs.)
      .then(() => {
        setTitle('');
        setDescription('');
        setTimeout(() => navigate('/'), 1000);
      })
  };

  useEffect(() => {
    return () => {
      dispatch(clearRecords());
    };
  }, [dispatch]);

  return (
    <Form
      handleSubmit={handleSubmit}
      setTitleError={setTitleError}
      titleError={titleError}
      setDescriptionError={setDescriptionError}
      descriptionError={descriptionError}
      title={title}
      description={description}
      setTitle={setTitle}
      setDescription={setDescription}
      isLoading={isLoading}
    />
  );
};
