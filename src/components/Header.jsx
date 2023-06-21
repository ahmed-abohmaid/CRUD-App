import React from 'react';

const Header = () => {
  return (
    <div className="mb-6 mt-4">
      <h1 className="my-4">CRUD APP</h1>
      <ul className=" bg-black h-[50px] list-none flex items-center px-1">
        <li className="ml-[10px] mr-[10px]">
          <a href="/" className="text-white no-underline">
            Home
          </a>
        </li>
        <li className="mr-[10px]">
          <a href="/" className="text-white no-underline">
            Add Post
          </a>
        </li>
        <li className="ml-auto mr-[10px] text-white">login</li>
      </ul>
    </div>
  );
};

export default Header;
