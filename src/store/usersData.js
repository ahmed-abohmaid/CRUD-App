import { createAsyncThunk } from '@reduxjs/toolkit';

const API = process.env.REACT_APP_API;

export const addUser = createAsyncThunk(
  'users/addUser',
  async (userDetails, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(`${API}/users`, {
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
      const res = await fetch(`${API}/users?q=${mail}`);
      const data = await res.json();
      return data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
