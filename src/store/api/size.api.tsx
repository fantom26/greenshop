import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./fetch";

export const sizeApi = createApi({
  reducerPath: "sizeApi",
  baseQuery,
  endpoints: (builder) => ({
    size: builder.query<string[], void>({
      query: () => "/size"
    })
  })
});

export const { useSizeQuery } = sizeApi;
