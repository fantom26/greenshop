import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NEXT_PUBLIC_API_URL } from "@constants";
import { IProduct } from "@declarations";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_URL
  }),
  endpoints: (builder) => ({
    products: builder.query<{ products: IProduct[]; links: string; totalCount: number }, void>({
      // TODO replace type "any"
      query: (arg: any) => ({
        url: "/products",
        params: { ...arg }
      }),
      transformResponse: (products: IProduct[], meta) => ({
        products,
        links: meta.response.headers.get("Link"),
        totalCount: Number(meta.response.headers.get("X-Total-Count"))
      })
    }),
    interestedIn: builder.query<IProduct[], void>({
      query: () => ({
        url: "/interestedIn"
      })
    })
  })
});

export const { useProductsQuery, useInterestedInQuery } = productsApi;
