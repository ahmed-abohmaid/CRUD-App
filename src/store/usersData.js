import { createAsyncThunk } from '@reduxjs/toolkit';

export const addUser = createAsyncThunk(
  'users/addUser',
  async (userDetails, thunkAPI) => {
    const { rejectWithValue} = thunkAPI;

    try {
      const res = await fetch('https://crud-server-e63r.onrender.com/users', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (mail, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://crud-server-e63r.onrender.com/users?q=${mail}`
      );
      const data = await res.json();
      return data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);