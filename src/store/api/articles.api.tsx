import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NEXT_PUBLIC_API_URL } from "@/utils/constants";
import { IArticle } from "@/utils/declarations";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
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
