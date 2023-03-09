import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NEXT_PUBLIC_API_URL } from "@constants";

export const sizeApi = createApi({
  reducerPath: "sizeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_URL
  }),
  endpoints: (builder) => ({
    size: builder.query<string[], void>({
      query: () => "/size"
    })
  })
});

export const { useSizeQuery } = sizeApi;
