import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../store/data';
import { useEffect } from 'react';

const usePostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isLoading, error, record } = useSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return { isLoading, error, record };
};

export default usePostDetails;
