import React from 'react';
import usePostDetails from '../hooks/use-post-details';
import { Loading } from '../components/Loading';

export const PostDetails = () => {
  const { isLoading, error, record } = usePostDetails();

  return (
    <div>
      <Loading isLoading={isLoading} error={error}>
        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl">
            <span className="text-blue-500 font-bold">Title: </span>
            {record?.title}
          </p>
          <p className="text-2xl">
            <span className="text-blue-500 font-bold">ID: </span>
            {record?.id}
          </p>
        </div>
        <div className="text-2xl">
          <p className="text-blue-500 font-bold mb-1">Post description: </p>
          <p className="pl-3">{record?.description}</p>
        </div>
      </Loading>
    </div>
  );
};
