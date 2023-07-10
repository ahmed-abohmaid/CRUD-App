import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPosts,
  deletePost,
  addPost,
  fetchPost,
  editPost,
  searchPosts,
} from './data';
import { toast } from 'react-toastify';

const initialState = {
  records: [],
  isLoading: false,
  error: null,
  record: null,
  searchTerm: '',
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearRecords: (state) => {
      state.records = [];
    },
    clearRecord: (state) => {
      state.record = null;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
  },
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

    /* Search Posts */
    builder.addCase(searchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(searchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.records = action.payload;
    });
    builder.addCase(searchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.error(`Sorry, ${action.payload}`);
    });

    /* Fetch Single Post */
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.record = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
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

    /* Edit Post */
    builder.addCase(editPost.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.record = action.payload;
      toast.success('Post has been updated successfully');
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.error(`Sorry, ${action.payload}`);
    });
  },
});

export const { clearRecords, clearRecord, setSearchTerm, clearSearchTerm } = postSlice.actions;
export default postSlice.reducer;
