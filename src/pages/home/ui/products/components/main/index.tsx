import { useState } from "react";

import { useFetchProducts } from "@/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Loader, Pagination, ProductCard, Typography } from "@/shared/ui";

import { Queries } from "../sidebar/components";
import { Filter } from "./components/filter";
import { MobileFilter } from "./components/mobile-filter";
import { Sort } from "./components/sort";
import * as S from "./main.styled";

const LIMIT = 9;
const START_PAGE = 1;

export function Main() {
  const { t } = useTranslation("home");
  const [page, setPage] = useState(START_PAGE);

  const { query } = useRouter();
  const { data, isLoading } = useFetchProducts({
    ...query,
    _page: page,
    _limit: LIMIT
  });

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
