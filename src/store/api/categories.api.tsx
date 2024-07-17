import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./fetch";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery,
  endpoints: (builder) => ({
    categories: builder.query<string[], void>({
      query: () => "/categories"
    })
  })
});

export const { useCategoriesQuery } = categoriesApi;
