import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NEXT_PUBLIC_API_URL } from "@constants";
import { IProduct } from "@declarations";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_URL
  }),
  endpoints: (builder) => ({
    products: builder.query<IProduct[], void>({
      // TODO replace type "any"
      query: (arg: any) => ({
        url: "/products",
        params: { ...arg }
      })
    })
  })
});

export const { useProductsQuery } = productsApi;
