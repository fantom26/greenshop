import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { articlesApi, categoriesApi, pagesApi, productsApi, sizeApi } from "./api";

export const makeStore = () =>
  configureStore({
    reducer: {
      [articlesApi.reducerPath]: articlesApi.reducer,
      [categoriesApi.reducerPath]: categoriesApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
      [sizeApi.reducerPath]: sizeApi.reducer,
      [pagesApi.reducerPath]: pagesApi.reducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (gDM) => gDM().concat(articlesApi.middleware, categoriesApi.middleware, productsApi.middleware, sizeApi.middleware, pagesApi.middleware)
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
