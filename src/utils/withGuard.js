import { useSelector } from 'react-redux';

const withGuard = (Component) => {
  const Wrapper = () => {
    const { isLoggedIn } = useSelector((state) => state.authReducer);

    return isLoggedIn ? <Component /> : <h1>Please, loggin first</h1>;
  };
  return Wrapper;
};

export default withGuard;
