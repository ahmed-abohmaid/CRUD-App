import React, { useState } from 'react';
import ConfirmDelete from './ConfirmDelete';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PostsTableBody = ({ post, index }) => {
  let [Popup, setPopup] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);

  const navigate = useNavigate();

  return (
    <>
      <tr
        className={`hover:bg-gray-100 duration-75 ${
          ++index % 2 === 0 && `bg-gray-50`
        }`}
      >
        <td className="p-3 text-gray-700 text-md whitespace-nowrap">
          {index < 10 ? `0${index}` : index}
        </td>
        <td className="p-3 text-gray-700 text-md whitespace-nowrap">
          <Link to={`post/${post.id}/details`} className="hover:underline">
            {post.title}
          </Link>
        </td>
        <td className="p-3 text-gray-700 text-md whitespace-nowrap">
          {post.user}
        </td>
        <td className="p-3 text-gray-700 text-md whitespace-nowrap">
          <div className="flex items-center gap-2">
            <button
              className="px-2 py-[1px] hover:bg-green-500 duration-100 ease-in bg-green-600 rounded-md text-white"
              onClick={() => navigate(`post/${post.id}/edit`)}
            >
              Edit
            </button>
            <button
              className="px-2 py-[1px] hover:bg-red-500 duration-100 ease-in bg-red-600 rounded-md text-white disabled:bg-red-400"
              onClick={() => setPopup(true)}
              disabled={!isLoggedIn || user.name !== post.user}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
      {Popup && <ConfirmDelete post={post} setPopup={setPopup} />}
    </>
  );
};
