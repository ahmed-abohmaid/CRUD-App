import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { records: [], loading: false, error: null };

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const res = await fetch('http://localhost:5000/posts');
    const data = await res.json();
    return data;
  } catch (error) {
    return error.massege;
  }
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(...action.payload);
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
