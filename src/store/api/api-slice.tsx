import { IArticle, IPage, IProduct } from "@/utils/declarations";
import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { baseQuery } from "./fetch";

interface IProductsParams {
  _limit: number;
  _page: number;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    articles: builder.query<IArticle[], void>({
      query: () => "/articles"
    }),

    categories: builder.query<string[], void>({
      query: () => "/categories"
    }),

    getPageInfo: builder.query<IPage, string>({
      query: (title = "Home") => ({
        url: `/pages?title=${title}`
      })
    }),
    products: builder.query<{ products: IProduct[]; links: string; totalCount: number }, Partial<IProductsParams>>({
      query: (params) => ({
        url: "/products",
        params
      }),
      transformResponse: (products: IProduct[], meta: Required<FetchBaseQueryMeta>) => ({
        products,
        links: meta.response.headers.get("Link") || "",
        totalCount: Number(meta.response.headers.get("X-Total-Count"))
      })
    }),
    productsSearch: builder.query<IProduct[], string>({
      query: (q) => ({
        url: "/products",
        params: { q }
      }),
      transformResponse: (products: IProduct[]) => products.map((p) => ({ ...p, label: p.name, value: p._id }))
    }),
    interestedIn: builder.query<IProduct[], void>({
      query: () => ({
        url: "/interestedIn"
      })
    }),
    size: builder.query<string[], void>({
      query: () => "/size"
    })
  })
});

// Export hooks for usage in functional components
export const {
  useArticlesQuery,
  useCategoriesQuery,
  useGetPageInfoQuery,
  useProductsQuery,
  useProductsSearchQuery,
  useInterestedInQuery,
  useSizeQuery,
  util: { getRunningQueriesThunk }
} = apiSlice;

// export endpoints for use in SSR
export const { getPageInfo } = apiSlice.endpoints;
