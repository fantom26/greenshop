import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NEXT_PUBLIC_API_URL } from "@constants";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_URL
  }),
  endpoints: (builder) => ({
    categories: builder.query<string[], void>({
      query: () => "/categories"
    })
  })
});

export const { useCategoriesQuery } = categoriesApi;
