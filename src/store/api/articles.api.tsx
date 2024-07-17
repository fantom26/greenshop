import { IArticle } from "@/utils/declarations";
import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./fetch";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery,
  endpoints: (builder) => ({
    articles: builder.query<IArticle[], void>({
      query: () => "/articles"
    })
  })
});

export const { useArticlesQuery } = articlesApi;
