import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listNews: [],
  status: "",
};

export const newsReducer = createSlice({
  name: "news",
  initialState,
  reducers: {
    postNews: (state, action) => {
      state.listNews = [...state.listNews, ...action.payload.news];
      state.status = action.payload.status;
    },
    removeAll: (state, action) => {
      state.listNews = [];
      state.status = action.payload.status;
    },
    getNews: (state, action) => {
      state.listNews = action.payload.listNews;
      state.status = action.payload.status;
    },
    setStatusReducer: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const { getNews, removeAll, postNews, setStatusReducer } =
  newsReducer.actions;

export default newsReducer.reducer;
