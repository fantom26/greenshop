import { useState } from "react";

import { IProduct } from "@/utils/declarations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import useSWR from "swr";

import { NEXT_PUBLIC_API_URL } from "@/shared/config";
import { Loader, Pagination, ProductCard, Typography } from "@/shared/ui";

import { Queries } from "../sidebar/components";
import { Filter } from "./components/filter";
import { MobileFilter } from "./components/mobile-filter";
import { Sort } from "./components/sort";
import * as S from "./main.styled";

interface IProductsParams {
  _limit: number;
  _page: number;
}

const LIMIT = 9;
const START_PAGE = 1;

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

export function Main() {
  const { t } = useTranslation("home");
  const [page, setPage] = useState(START_PAGE);

  const { query } = useRouter();

  const { data, isLoading } = useSWR(
    [
      "/products",
      {
        ...query,
        _page: page,
        _limit: LIMIT
      }
    ],
    ([, params]) => fetchProducts(params)
  );

  let content;
  let pagination;

  if (data) {
    if (data.products.length > 0) {
      content = (
        <S.List>
          {data.products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </S.List>
      );

      pagination = data.meta.links && (
        <S.Bottom>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(data.meta.totalCount / LIMIT)}
            handleChangePage={(newPage: number) => {
              setPage(newPage);
            }}
          />
        </S.Bottom>
      );
    } else {
      content = (
        <Typography tag="h2" variant="h2">
          {t("products.empty")}
        </Typography>
      );
    }
  } else if (isLoading) {
    content = <Loader />;
  }

  return (
    <S.Main>
      <S.Top>
        <Filter />
        <Sort />
        <MobileFilter />
      </S.Top>
      <S.WrapperQueries>
        <Queries />
      </S.WrapperQueries>
      <S.Content>{content}</S.Content>
      {pagination}
    </S.Main>
  );
}
