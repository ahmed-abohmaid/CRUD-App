import React from 'react';
import SignupForm from '../components/SignupForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addUser } from '../store/usersData';
import { setIsLoggedIn } from '../store/authSlice';
import { fetchUsers } from '../utils/fetchUsers';
import { toast } from 'react-toastify';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please, insert at least 2 chars')
    .max(70, 'Too Long! The maximum is 70 chars')
    .required('This field is required.'),
  mail: Yup.string()
    .email()
    .test('test-mails', 'You need to match (example@example.com).', (value) =>
      /\w+@\w+\.com/.test(value)
    )
    .required('This field is required.'),
  password: Yup.string()
    .test(
      'test-passwords',
      'Password must be at least 8 characters long and contain a combination of uppercase letters, lowercase letters, digits, and special characters.',
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        )
    )
    .required('This field is required.'),
});

const Signup = () => {
  const { isLoading } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      mail: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, { setFieldError }) => {
      // Check if user is already exist
      const fetchData = async () => {
        try {
          const isUserExist = await fetchUsers(values.mail);
          console.log(isUserExist);
          if (isUserExist.length === 0) {
            dispatch(
              addUser({
                name: values.name,
                mail: values.mail,
                password: values.password,
              })
            )
              .unwrap()
              .then(() => {
                dispatch(setIsLoggedIn(true));
                localStorage.setItem(
                  'user',
                  JSON.stringify({ name: values.name, mail: values.mail })
                );
                toast.success(`Welcome, ${values.name}`)
                setTimeout(() => navigate('/'), 500);
              })
              .catch(() => dispatch(setIsLoggedIn(false)));
          } else {
            setFieldError(
              'mail',
              'This user is already exist, try different Email.'
            );
          }
        } catch (error) {
          toast('Error has occurred, please try again');
        }
      };
      fetchData();
    },
  });
  return <SignupForm formik={formik} isLoading={isLoading} />;
};

export default Signup;
