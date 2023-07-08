import React from 'react';
import { NavLink } from 'react-router-dom';

const nonActiveClass = 'text-white no-underline duration-100 ease';
const activeClass = 'underline text-blue-500 duration-100 ease';

const Header = () => {
  return (
    <div className="mb-6 mt-4">
      <h1 className="my-4 font-bold text-3xl uppercase tracking-wide">
        crud app
      </h1>
      <ul className=" bg-black h-[50px] list-none flex items-center px-1 rounded-sm">
        <li className="ml-[10px] mr-[10px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : nonActiveClass
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className="mr-[10px]">
          <NavLink
            to="post/add"
            className={({ isActive }) =>
              isActive ? activeClass : nonActiveClass
            }
          >
            Add Post
          </NavLink>
        </li>
        <li className="ml-auto mr-[10px] text-white">login</li>
      </ul>
    </div>
  );
};

export default Header;
