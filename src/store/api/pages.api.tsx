import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { NEXT_PUBLIC_API_URL } from "@constants";
import { IPage } from "@declarations";

export const pagesApi = createApi({
  reducerPath: "pagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_URL
  }),
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
  useGetPageInfoQuery,
  util: { getRunningQueriesThunk }
} = pagesApi;

// export endpoints for use in SSR
export const { getPageInfo } = pagesApi.endpoints;
