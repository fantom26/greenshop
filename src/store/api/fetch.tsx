import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import { NEXT_PUBLIC_API_URL } from "@/shared/config";

export const baseQuery = fetchBaseQuery({
  baseUrl: NEXT_PUBLIC_API_URL
});
