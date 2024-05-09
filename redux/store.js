import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./reducers/system.reducer";
import productReducer from "./reducers/product.reducer";
import newsReducer from "./reducers/news.reducer";

export default configureStore({
  reducer: {
    system: systemReducer,
    products: productReducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
