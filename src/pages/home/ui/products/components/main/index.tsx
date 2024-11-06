import { useState } from "react";

import { useProductsQuery } from "@/store/api";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Loader, Pagination, ProductCard, Typography } from "@/shared/ui";

import { Queries } from "../sidebar/components";
import { Filter } from "./components/filter";
import { MobileFilter } from "./components/mobile-filter";
import { Sort } from "./components/sort";
import * as S from "./main.styled";

export function Main() {
  const { t } = useTranslation("home");

  const LIMIT = 9;
  const [page, setPage] = useState(1);

  const { query } = useRouter();

  const { data, isFetching } = useProductsQuery({
    ...query,
    _page: page,
    _limit: LIMIT
  });

  let content;

  if (data) {
    if (data.products.length > 0) {
      content = (
        <S.List>
          {data?.products?.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </S.List>
      );
    } else {
      content = (
        <Typography tag="h2" variant="h2">
          {t("products.empty")}
        </Typography>
      );
    }
  } else if (isFetching) {
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
      {data?.links && (
        <S.Bottom>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(data?.totalCount / LIMIT)}
            handleChangePage={(page: number) => {
              setPage(page);
            }}
          />
        </S.Bottom>
      )}
    </S.Main>
  );
}
