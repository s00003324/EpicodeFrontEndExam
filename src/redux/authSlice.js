import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email } = action.payload;
      state.user = {
        email,
        role: email.includes('admin') ? 'admin' : 'user'
      };
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
