import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { PostsList } from './components/PostsList';
import { PostDetails } from './pages/PostDetails';
import { EditPost } from './pages/EditPost';
import { AddPost } from './pages/AddPost';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <PostsList /> },
      { path: 'post', element: <PostsList /> },
      { path: 'post/:id/details', element: <PostDetails /> },
      { path: 'post/:id/edit', element: <EditPost /> },
      { path: 'post/:id/add', element: <AddPost /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
