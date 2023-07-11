import React from 'react';
import LoginForm from '../components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchUser } from '../store/usersData';
import { toast } from 'react-toastify';
import { setIsLoggedIn } from '../store/authSlice';

const formSchema = Yup.object().shape({
  mail: Yup.string().email().required('This field is required.'),
  password: Yup.string().required('This field is required.'),
});

const Login = () => {
  const { isLoading } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      mail: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      dispatch(fetchUser(values.mail))
        .unwrap()
        .then((data) => {
          if (data.length === 0) {
            toast.error('Please Enter Valid Email');
            dispatch(setIsLoggedIn(false));
          } else if (data[0].password !== values.password) {
            toast.error('Please Enter the correct password');
            dispatch(setIsLoggedIn(false));
          } else {
            toast.success(`Welcome, ${data[0].name}`);
            dispatch(setIsLoggedIn(true));
            setTimeout(() => navigate('/'), 500);
          }
        });
    },
  });

  return <LoginForm formik={formik} isLoading={isLoading} />;
};

export default Login;
