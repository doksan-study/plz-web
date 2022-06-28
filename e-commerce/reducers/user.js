import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  me: null, // 내 정보
  loginLoading: false,
  loginDone: false,
  loginError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  //
  extraReducers: (builder) => {},
});

export default userSlice;
