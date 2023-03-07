import { configureStore } from "@reduxjs/toolkit";

import { articlesApi } from "./api";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
