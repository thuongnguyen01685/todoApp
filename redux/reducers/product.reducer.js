import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  productDetail: {},
};

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = [...state.products, ...action.payload.products];
      state.total = action.payload.total;
    },
    getProductDetail: (state, action) => {
      state.productDetail = action.payload.productDetail;
    },
    resetProducts: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { getProducts, resetProducts, getProductDetail } =
  productReducer.actions;

export default productReducer.reducer;
