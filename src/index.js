import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Home } from './pages/Home';
import { RootLayout } from './pages/RootLayout';
import { PostDetails } from './pages/PostDetails';
import { EditPost } from './pages/EditPost';
import AddPost from './pages/AddPost';
import { ErrorPage } from './pages/ErrorPage';

const postParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response('Bad Request', {
      statusText: 'Please make sure to insert correct post ID',
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
        element: <PostDetails />,
        loader: postParamHandler,
      },
      { path: 'post/:id', element: <Navigate replace to="details" /> },
      {
        path: 'post/:id/edit',
        element: <EditPost />,
        loader: postParamHandler,
      },
      { path: 'post/add', element: <AddPost /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
