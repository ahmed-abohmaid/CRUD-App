import { useSelector } from 'react-redux';
import usePostDetails from '../hooks/use-post-details';
import { Loading } from '../components/Loading';

const withGuard = (Component) => {
  const Wrapper = () => {
    const { isLoggedIn, user } = useSelector((state) => state.authReducer);
    const { record, isLoading, error } = usePostDetails();

    if (!isLoggedIn) {
      return <h1>Please, loggin first</h1>;
    }

    if (user.name === record?.user || Component.name === 'AddPost') {
      return <Component />;
    } else {
      return (
        <Loading isLoading={isLoading} error={error}>
          <h1>You can only edit/delete your own posts</h1>
        </Loading>
      );
    }
  };
  return Wrapper;
};

export default withGuard;
