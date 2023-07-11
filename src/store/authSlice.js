import { createSlice } from '@reduxjs/toolkit';

const initialState = { id: 1, userName: '', isLoggedIn: true };

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

export default authSlice.reducer;
