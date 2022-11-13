import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    principal: undefined,
  },
  reducers: {
    setPrincipal: (state, action) => {
      state.principal = action.payload;
    },
    clearPrincipal: (state, action) => {
      state.principal = undefined;
    },
  },
});

export const { setPrincipal, clearPrincipal } = authSlice.actions;

export default authSlice.reducer;
