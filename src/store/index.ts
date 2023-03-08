import { configureStore } from "@reduxjs/toolkit";

import { articlesApi, categoriesApi, productsApi } from "./api";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (gDM) => gDM().concat(articlesApi.middleware, categoriesApi.middleware, productsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
