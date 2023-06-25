import React from 'react';
import usePostDetails from '../hooks/use-post-details';
import { Loading } from '../components/Loading';

export const PostDetails = () => {
  const { isLoading, error, record } = usePostDetails();

  return (
    <div>
      <Loading isLoading={isLoading} error={error}>
        <p>Title: {record?.title}</p>
        <p>Description: {record?.description}</p>
      </Loading>
    </div>
  );
};
