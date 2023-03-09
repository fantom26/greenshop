import { configureStore } from "@reduxjs/toolkit";

import { articlesApi, categoriesApi, productsApi, sizeApi } from "./api";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [sizeApi.reducerPath]: sizeApi.reducer
  },
  middleware: (gDM) => gDM().concat(articlesApi.middleware, categoriesApi.middleware, productsApi.middleware, sizeApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
