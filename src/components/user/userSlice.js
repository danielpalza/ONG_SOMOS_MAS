import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      window.localStorage.removeItem('token');
      // clear persistent user
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const getLoggedUser = (state) => state.user.user;

export default userSlice.reducer;
