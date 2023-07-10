import React, { useEffect } from 'react';
import { PostsListTable } from '../components/TableElements/PostsListTable';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import { clearRecords, clearSearchTerm } from '../store/postSlice';
import { fetchPosts, searchPosts } from '../store/data';

const Search = () => {
  const dispatch = useDispatch();
  const { records, isLoading, error, searchTerm } = useSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    setTimeout(() => {
      if (searchTerm) {
        dispatch(searchPosts(searchTerm));
      }
    }, 800);

    if (!searchTerm) {
      dispatch(clearRecords());
      dispatch(fetchPosts());
    }

    return () => {
      dispatch(clearRecords());
      dispatch(clearSearchTerm());
    };
  }, [dispatch, searchTerm]);

  return (
    <Loading isLoading={isLoading} error={error}>
      {records.length === 0 && searchTerm !== '' && !isLoading ? (
        <div className="mt-10 text-center text-xl ">
          No Posts Found! Try to change your search.
        </div>
      ) : (
        <table className="w-full">
          <PostsListTable records={records} error={error} />
        </table>
      )}
    </Loading>
  );
};

export default Search;
