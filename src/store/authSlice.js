import { createSlice } from '@reduxjs/toolkit';
import { addUser, fetchUser } from './usersData';
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    /* Add User */
    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.error(`Sorry, ${action.payload}`);
    });

    /* Get User */
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      toast.error(`Sorry, ${action.payload}`);
    });
  },
});

export const { setIsLoggedIn, setUser } = authSlice.actions;
export default authSlice.reducer;
