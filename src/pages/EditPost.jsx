import React, { useEffect } from 'react';
import usePostDetails from '../hooks/use-post-details';
import { Loading } from '../components/Loading';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editPost } from '../store/postsData';
import { PostsForm } from '../components/PostsForm';
import { clearRecord, clearRecords } from '../store/postSlice';
import withGuard from '../utils/withGuard';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditPost = () => {
  const { isLoading, error, record } = usePostDetails();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Three steps: 1) render [] => 2) pending [record] =>  3) fulfilled [record] */

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Please, insert at least 2 chars')
      .max(70, 'Too Long! The maximum is 70 chars')
      .required('This field is required.')
      .test(
        'test-equality',
        'You have to change at least one field.',
        (value, context) =>
          value !== record?.title ||
          context.parent.description !== record?.description
      ),
    description: Yup.string()
      .required('This field is required.')
      .test(
        'test-equality',
        'You have to change at least one field.',
        (value, context) =>
          value !== record?.description ||
          context.parent.title !== record?.title
      ),
  });

  const formik = useFormik({
    initialValues: {
      title: record ? record?.title : '',
      description: record ? record?.description : '',
    },
    enableReinitialize: true,
    validationSchema: formSchema,
    onSubmit: (values) => {
      dispatch(
        editPost({
          id: record.id,
          title: values.title,
          description: values.description,
        })
      )
        .unwrap() // To not submit if the server isn't work (read the docs.)
        .then(() => {
          setTimeout(() => navigate(`/post/${record?.id}/details`), 1000);
        });
    },
  });

  useEffect(() => {
    return () => {
      dispatch(clearRecord());
      dispatch(clearRecords());
    };
  }, [dispatch]);

  return (
    <Loading isLoading={isLoading} error={error}>
      <PostsForm formik={formik} isLoading={isLoading} />
    </Loading>
  );
};

export default withGuard(EditPost);
