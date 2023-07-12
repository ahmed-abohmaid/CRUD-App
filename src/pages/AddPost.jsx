import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/postsData';
import { useNavigate } from 'react-router-dom';
import { PostsForm } from '../components/PostsForm';
import { clearRecords } from '../store/postSlice';
import withGuard from '../utils/withGuard';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Loading } from '../components/Loading';

const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Please, insert at least 2 chars')
    .max(70, 'Too Long! The maximum is 70 chars')
    .required('This field is required.'),
  description: Yup.string().required('This field is required.'),
});

const AddPost = () => {
  const { isLoading, error } = useSelector((state) => state.postReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      let id = Math.floor(Math.random() * 500);

      dispatch(
        addPost({ id, title: values.title, description: values.description })
      )
        .unwrap() // To not submit if the server isn't work (read the docs.)
        .then(() => {
          resetForm({ values: '' });
          setTimeout(() => navigate('/'), 1000);
        });
    },
  });

  useEffect(() => {
    return () => {
      dispatch(clearRecords());
    };
  }, [dispatch]);

  return (
    <Loading isLoading={isLoading} error={error}>
      <PostsForm formik={formik} isLoading={isLoading} />
    </Loading>
  );
};

export default withGuard(AddPost);
