import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/data';
import { motion } from 'framer-motion';

const ConfirmDelete = ({ post, setPopup }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="fixed top-0 left-0 bg-black/10 w-full h-screen z-40"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
        transition={{ duration: 0.2 }}
        className="fixed p-4 rounded-t-xl top-1/2 left-1/2 z-50 sm:w-[600px] w-[280px] bg-white sm:rounded-md origin-center"
      >
        <p className="text-lg tex">
          Are you sure to delete{' '}
          <span className="text-blue-600">"{post.title}"</span> post?
        </p>
        <div className="flex items-center gap-2 mt-5 justify-end">
          <button
            className="px-2 py-[1px] hover:bg-gray-500 duration-100 ease-in bg-gray-400 rounded-md text-white"
            onClick={() => setPopup(false)}
          >
            Cancle
          </button>
          <button
            className="px-2 py-[1px] hover:bg-red-500 duration-100 ease-in bg-red-600 rounded-md text-white"
            onClick={() => dispatch(deletePost(post.id))}
          >
            Delete
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ConfirmDelete;
