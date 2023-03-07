import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NEXT_PUBLIC_API_URL } from "@constants";
import { IArticle } from "@declarations";

export const articlesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_URL
  }),
  endpoints: (builder) => ({
    articles: builder.query<IArticle[], void>({
      query: () => "/articles"
    })
  })
});

export const { useArticlesQuery } = articlesApi;
