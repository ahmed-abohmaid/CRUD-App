import { createSlice } from '@reduxjs/toolkit';

const initialState = { records: [], loading: false, error: null };

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default postSlice.reducer;
