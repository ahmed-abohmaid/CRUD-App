import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../state/postSlice';
import styles from './global.module.css';
import { PostsListTable } from './PostsListTable';

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
      <PostsListTable records={records} error={error} />
    </table>
  );
};
