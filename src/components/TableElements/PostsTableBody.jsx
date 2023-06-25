import React, { useCallback, useState } from 'react';
import ConfirmDelete from './ConfirmDelete';

export const PostsTableBody = ({ post, index }) => {
  let [Popup, setPopup] = useState(false);

  const handleDeleteBtn = useCallback(() => {
    setPopup(true);
  }, []);

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
          {post.title}
        </td>
        <td className="p-3 text-gray-700 text-md whitespace-nowrap">
          <div className="flex items-center gap-2">
            <button className="px-2 py-[1px] hover:bg-green-600 duration-100 ease-in bg-green-500 rounded-md text-white">
              Edit
            </button>
            <button
              className="px-2 py-[1px] hover:bg-red-600 duration-100 ease-in bg-red-500 rounded-md text-white"
              onClick={() => handleDeleteBtn()}
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
