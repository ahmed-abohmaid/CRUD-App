import React, { useEffect, useState } from 'react';
import usePostDetails from '../hooks/use-post-details';
import { Loading } from '../components/Loading';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editPost } from '../store/data';
import { Form } from '../components/Form';
import { clearRecord } from '../store/postSlice';

export const EditPost = () => {
  const { isLoading, error, record } = usePostDetails();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Three steps: 1) render [] => 2) pending [record] =>  3) fulfilled [record] */

  useEffect(() => {
    if (record) {
      setTitle(record?.title);
      setDescription(record?.description);
    }
  }, [record]);

  useEffect(() => {
    return () => {
      dispatch(clearRecord());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

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
    if (title === record?.title && description === record?.description) {
      setTitleError("You have to change at least one field.");
      setDescriptionError("You have to change at least one field.");
      setTimeout(() => {
        setTitleError(null);
        setDescriptionError(null);
      }, 6000);
      return;
    }

    dispatch(editPost({ id: record.id, title, description }))
      .unwrap() // To not submit if the server isn't work (read the docs.)
      .then(() => {
        setTimeout(() => navigate(`/post/${record?.id}/details`), 1000);
      })
  };
  return (
    <Loading isLoading={isLoading} error={error}>
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
    </Loading>
  );
};
