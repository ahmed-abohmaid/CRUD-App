import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/postSlice';

const nonActiveClass =
  'text-white no-underline duration-100 ease text-[13px] sm:text-sm';
const activeClass =
  'underline text-blue-500 duration-100 ease text-[13px] sm:text-sm';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.postReducer);
  const { user, isLoggedIn } = useSelector((state) => state.authReducer);

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
        <li className="ml-auto relative">
          <IoMdSearch
            fontSize={20}
            className="text-balck absolute top-1/2 transform -translate-y-1/2 left-1 text-lg"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) =>
              dispatch(setSearchTerm(e.target.value.toLowerCase()))
            }
            onFocus={() => navigate('/posts/search')}
            placeholder="Search"
            className="bg-white outline-none text-black text-sm px-2 pl-6 py-1 w-[150px] sm:w-[350px] rounded-full placeholder:text-black placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in"
          />
        </li>

        <li className="ml-auto mr-[10px] text-white capitalize">
          {isLoggedIn ? (
            <p className="text-[13px] sm:text-sm">
              {user.name.slice(0, user.name.indexOf(' ') !== -1? user.name.indexOf(' ') : user.name.length)}
            </p>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? activeClass : nonActiveClass
              }
            >
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
