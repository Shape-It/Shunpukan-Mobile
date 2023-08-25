import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isActiveUser: false,
  },
  reducers: {
    clearCredentials(state) {
      state.isActiveUser = false;
    },
    login(state) {
      state.isActiveUser = true;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectIsActiveUser = (state) => state.auth.isActiveUser;
