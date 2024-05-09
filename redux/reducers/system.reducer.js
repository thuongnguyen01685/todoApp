import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const systemReducer = createSlice({
  name: "system",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = systemReducer.actions;

export default systemReducer.reducer;
