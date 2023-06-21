import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../state/postSlice';

export const PostsList = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <table>
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th className="p-3 text-md font-semibold tracking-wide text-left">
            No.
          </th>
          <th className="p-3 w-[70%] text-md font-semibold tracking-wide text-left">
            Title
          </th>
          <th className="p-3 w-[10%] text-md font-semibold tracking-wide text-left"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-gray-100 duration-75">
          <td className="p-3 text-gray-700 text-md whitespace-nowrap">01</td>
          <td className="p-3 text-gray-700 text-md whitespace-nowrap">
            this is title 1
          </td>
          <td className="p-3 text-gray-700 text-md whitespace-nowrap">
            <div className="flex items-center gap-2">
              <button className="px-2 py-[1px] hover:bg-green-600 duration-100 ease-in bg-green-500 rounded-md text-white">
                Edit
              </button>
              <button className="px-2 py-[1px] hover:bg-red-600 duration-100 ease-in bg-red-500 rounded-md text-white">
                Delete
              </button>
            </div>
          </td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100 duration-75">
          <td className="p-3 text-gray-700 text-md whitespace-nowrap">02</td>
          <td className="p-3 text-gray-700 text-md whitespace-nowrap">
            this is title 2
          </td>
          <td className="p-3 text-gray-700 text-md whitespace-nowrap">
            <div className="flex items-center gap-2">
              <button className="px-2 py-[1px] hover:bg-green-600 duration-100 ease-in bg-green-500 rounded-md text-white">
                Edit
              </button>
              <button className="px-2 py-[1px] hover:bg-red-600 duration-100 ease-in bg-red-500 rounded-md text-white">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
