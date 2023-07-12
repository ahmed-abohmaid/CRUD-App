import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import styles from './components/global.module.css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Home } from './pages/Home';
import { RootLayout } from './pages/RootLayout';
import { ErrorPage } from './pages/ErrorPage';
import { getLocalUser } from './utils/getLocalUSer';

const AddPost = React.lazy(() => import('./pages/AddPost'));
const EditPost = React.lazy(() => import('./pages/EditPost'));
const PostDetails = React.lazy(() => import('./pages/PostDetails'));
const Search = React.lazy(() => import('./pages/Search'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const Signup = React.lazy(() => import('./pages/Signup'));

const postParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response('Bad Request', {
      statusText: 'Please make sure to insert correct post ID',
      status: 400,
    }); // To make it go to error page (from documentation)
  }
};

const isLoggedIn = () => {
  const user = getLocalUser();

  if (user) {
    throw new Response('Bad Request', {
      statusText: "You can't login again!",
      status: 400,
    }); // To make it go to error page (from documentation)
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'post', element: <Home /> },
      {
        path: 'post/:id/details',
        element: (
          <Suspense
            fallback={
              <div className="mx-auto flex justify-center mt-6 overflow-y-hidden">
                <span className={`${styles.loader}`}></span>
              </div>
            }
          >
            <PostDetails />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      { path: 'post/:id', element: <Navigate replace to="details" /> },
      {
        path: 'post/:id/edit',
        element: (
          <Suspense
            fallback={
              <div className="mx-auto flex justify-center mt-6 overflow-y-hidden">
                <span className={`${styles.loader}`}></span>
              </div>
            }
          >
            <EditPost />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: 'post/add',
        element: (
          <Suspense
            fallback={
              <div className="mx-auto flex justify-center mt-6 overflow-y-hidden">
                <span className={`${styles.loader}`}></span>
              </div>
            }
          >
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: 'posts/search',
        element: (
          <Suspense
            fallback={
              <div className="mx-auto flex justify-center mt-6 overflow-y-hidden">
                <span className={`${styles.loader}`}></span>
              </div>
            }
          >
            <Search />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense
            fallback={
              <div className="mx-auto flex justify-center mt-6 overflow-y-hidden">
                <span className={`${styles.loader}`}></span>
              </div>
            }
          >
            <LoginPage />
          </Suspense>
        ),
        loader: isLoggedIn,
      },
      {
        path: 'signup',
        element: (
          <Suspense
            fallback={
              <div className="mx-auto flex justify-center mt-6 overflow-y-hidden">
                <span className={`${styles.loader}`}></span>
              </div>
            }
          >
            <Signup />
          </Suspense>
        ),
        loader: isLoggedIn,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
