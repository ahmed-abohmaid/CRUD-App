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
        <p>
          <span className="text-blue-500 text-xl">Title: </span>
          <span className="text-lg">{record?.title}</span>
        </p>
        <p>
          <span className="text-blue-500 text-xl">User: </span>
          <span className="text-lg">{record?.user}</span>
        </p>
        <p>
          <span className="text-blue-500 text-xl">ID: </span>
          <span className="text-lg">{record?.id}</span>
        </p>
      </div>
      <div>
        <p className="text-blue-500 mb-1 text-xl">Post description: </p>
        <p className="pl-3 text-lg">{record?.description}</p>
      </div>
    </Loading>
  );
};

export default PostDetails;
