import React from 'react';
import { PostsTableHead } from './PostsTableHead';
import { PostsTableBody } from './PostsTableBody';

export const PostsListTable = ({ records, error }) => {
  return (
    <>
      <thead className="bg-gray-50 border-b-2 border-gray-200">
        <PostsTableHead />
      </thead>
      <tbody className="divide-y divide-gray-200">
        {error ? (
          <tr>
            <td className="p-3 text-gray-700 text-md whitespace-nowrap">
              {error}
            </td>
          </tr>
        ) : (
          records.map((post, index) => (
            <PostsTableBody key={post.id} index={index} post={post} />
          ))
        )}
      </tbody>
    </>
  );
};
