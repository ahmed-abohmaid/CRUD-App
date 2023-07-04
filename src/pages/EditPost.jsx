import React, { useEffect, useState } from 'react';
import usePostDetails from '../hooks/use-post-details';
import { Loading } from '../components/Loading';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editPost } from '../state/data';
import { Form } from '../components/Form';

export const EditPost = () => {
  const { isLoading, error, record } = usePostDetails();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isdescriptionEmpty, setIsDescriptionEmpty] = useState(false);
  const [isError, setIsError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (record && !title && !description) {
      setTitle(record.title);
      setDescription(record.description);
    }
  }, [record, description, title]);

  const handleSubmit = (e) => {
    e.preventDefault();

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

    dispatch(editPost({ id: record.id, title, description }))
      .unwrap() // To not submit if the server isn't work (read the docs.)
      .then(() => {
        setTimeout(() => navigate(`/post/${record?.id}/details`), 1000);
      })
      .catch((error) => setIsError(error));
  };
  return (
    <Loading isLoading={isLoading} error={error}>
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
        isError={isError}
      />
    </Loading>
  );
};
