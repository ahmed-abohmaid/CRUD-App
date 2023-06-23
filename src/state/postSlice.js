import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, deletePost, addPost } from './data';
import { toast } from 'react-toastify';

const initialState = { records: [], isLoading: false, error: null };

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Fetch Posts */
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.records.push(...action.payload);
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.error(`Sorry, ${action.payload}`);
    });

    /* Add Post */
    builder.addCase(addPost.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.records.push(action.payload);
      toast.success('Post has been added successfully');
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.error(`Sorry, ${action.payload}`);
    });

    /* Delete Post */
    builder.addCase(deletePost.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.records = state.records.filter(
        (post) => post.id !== action.payload
      );
      toast.success('Post has been deleted successfully');
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.error(`Sorry, ${action.payload}`);
    });
  },
});

export default postSlice.reducer;
