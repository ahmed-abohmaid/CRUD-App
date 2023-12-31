import { createAsyncThunk } from '@reduxjs/toolkit';

const API = process.env.REACT_APP_API;

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${API}/posts`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchPosts = createAsyncThunk(
  'posts/searchPosts',
  async (query, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${API}/posts?q=${query}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${API}/posts/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`${API}/posts/${id}`, {
        method: 'DELETE',
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (postDetails, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    let { authReducer } = getState();
    postDetails.user = authReducer.user.name;

    try {
      const res = await fetch(`${API}/posts`, {
        method: 'POST',
        body: JSON.stringify(postDetails),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk(
  'posts/editPost',
  async (postDetails, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(`${API}/posts/${postDetails.id}`, {
        method: 'PATCH',
        body: JSON.stringify(postDetails),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
