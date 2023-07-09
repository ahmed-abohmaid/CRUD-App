import React, { useEffect } from 'react';
import usePostDetails from '../hooks/use-post-details';
import { Loading } from '../components/Loading';
import { clearRecord } from '../store/postSlice';
import { useDispatch } from 'react-redux';

const PostDetails = () => {
  const { isLoading, error, record } = usePostDetails();

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearRecord());
    };
  }, [dispatch]);

  return (
    <Loading isLoading={isLoading} error={error}>
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl">
          <span className="text-blue-500">Title: </span>
          {record?.title}
        </p>
        <p className="text-2xl">
          <span className="text-blue-500">ID: </span>
          {record?.id}
        </p>
      </div>
      <div className="text-2xl">
        <p className="text-blue-500 mb-1">Post description: </p>
        <p className="pl-3">{record?.description}</p>
      </div>
    </Loading>
  );
};

export default PostDetails;
