import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../state/postSlice';
import { PostsTableBody } from './PostsTableBody';

import styles from './global.module.css';

export const PostsList = () => {
  const dispatch = useDispatch();
  const { records, isLoading, error } = useSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return isLoading ? (
    <div className="mx-auto flex justify-center mt-6 overflow-y-hidden">
      <span className={`${styles.loader}`}></span>
    </div>
  ) : (
    <table>
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th className="p-3 text-md font-semibold tracking-wide text-left">
            No.
          </th>
          <th className="p-3 w-[70%] text-md font-semibold tracking-wide text-left">
            Title
          </th>
          <th className="p-3 w-[10%] text-md font-semibold tracking-wide text-left"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {error ? (
          <tr>
            <td className="p-3 text-gray-700 text-md whitespace-nowrap">
              {error}
            </td>
          </tr>
        ) : (
          records.map((post, index) => (
            <PostsTableBody
              key={post.id}
              index={index}
              post={post}
            />
          ))
        )}
      </tbody>
    </table>
  );
};
