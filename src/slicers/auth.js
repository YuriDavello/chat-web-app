import { createSlice } from '@reduxjs/toolkit';

export const authSlicer = createSlice({
  name: 'authenticate',
  initialState: {
    currentUser: { 
      id: null,
      displayName: null,
      email: null 
    },
    isLoading: true,
  },
  reducers: {
    login: (state, action) => {
      const { id, displayName, email } = action.payload;
      state.currentUser.id = id;
      state.currentUser.displayName = displayName;
      state.currentUser.email = email;

      state.isLoading = false;
    },
    logout: (state) => {
      state.currentUser.id = null; 
      state.currentUser.displayName = null;
      state.currentUser.email = null;

      state.isLoading = false;
    },
  },
});

export const { login, logout } = authSlicer.actions;

export default authSlicer.reducer;
