import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    principal: undefined,
  },
  reducers: {
    setPrincipal: (state, action) => {
      state.principal = action.payload;
      window.sessionStorage.setItem("principal", action.payload);
    },
    clearPrincipal: (state) => {
      state.principal = undefined;
      window.sessionStorage.clear();
      // window.sessionStorage.setItem("principal", "");
    },
  },
});

export const { setPrincipal, clearPrincipal } = authSlice.actions;

export default authSlice.reducer;
