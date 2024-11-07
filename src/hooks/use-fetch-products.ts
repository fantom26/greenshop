import { IProduct } from "@/utils/declarations";
import useSWR from "swr";

import { NEXT_PUBLIC_API_URL } from "@/shared/config";

interface IProductsParams {
  _limit: number;
  _page: number;
}

export const fetchProducts = async (params: Partial<IProductsParams>) => {
  const query = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/products?${query}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: IProduct[] = (await response.json()) || [];
  const links = response.headers.get("Link") || "";
  const totalCount = Number(response.headers.get("X-Total-Count")) || 0;

  return { products, meta: { links, totalCount } };
};

export function useFetchProducts(options: any) {
  return useSWR(["/products", options], ([, params]) => fetchProducts(params));
}
