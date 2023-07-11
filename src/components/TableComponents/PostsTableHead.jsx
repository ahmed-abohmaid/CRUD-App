import React from 'react';

export const PostsTableHead = () => {
  return (
    <tr>
      <th className="p-3 text-md font-semibold tracking-wide text-left">No.</th>
      <th className="p-3 w-[60%] text-md font-semibold tracking-wide text-left">
        Title
      </th>
      <th className="p-3 w-[20%] text-md font-semibold tracking-wide text-left">
        Posted By
      </th>
      <th className="p-3 w-[10%] text-md font-semibold tracking-wide text-left"></th>
    </tr>
  );
};
