import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../state/data';
import styles from '../components/global.module.css';
import { PostsListTable } from '../components/TableElements/PostsListTable';

export const Home = () => {
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
    <table className="w-full">
      <PostsListTable records={records} error={error} />
    </table>
  );
};
