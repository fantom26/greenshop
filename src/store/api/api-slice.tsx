import { IPage } from "@/utils/declarations";
import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { baseQuery } from "./fetch";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPageInfo: builder.query<IPage, string>({
      query: (title = "Home") => ({
        url: `/pages?title=${title}`
      })
    })
  })
});

// Export hooks for usage in functional components
export const {
  util: { getRunningQueriesThunk }
} = apiSlice;

// export endpoints for use in SSR
export const { getPageInfo } = apiSlice.endpoints;
