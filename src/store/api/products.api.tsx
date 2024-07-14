import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NEXT_PUBLIC_API_URL } from "@/utils/constants";
import { IProduct } from "@/utils/declarations";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_URL
  }),
  endpoints: (builder) => ({
    products: builder.query<{ products: IProduct[]; links: string; totalCount: number }, any>({
      // TODO replace type "any"
      query: (params: any) => ({
        url: "/products",
        params
      }),
      transformResponse: (products: IProduct[], meta) => ({
        products,
        links: meta.response.headers.get("Link"),
        totalCount: Number(meta.response.headers.get("X-Total-Count"))
      })
    }),
    productsSearch: builder.query<IProduct[], string>({
      query: (q) => ({
        url: "/products",
        params: {q}
      }),
      transformResponse: (products: IProduct[]) => products.map((p) => ({...p, label: p.name, value: p._id}))
    }),
    interestedIn: builder.query<IProduct[], void>({
      query: () => ({
        url: "/interestedIn"
      })
    })
  })
});

export const { useProductsQuery, useProductsSearchQuery, useInterestedInQuery } = productsApi;
