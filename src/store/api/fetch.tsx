import { NEXT_PUBLIC_API_URL } from "@/shared/config";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_API_URL
});
