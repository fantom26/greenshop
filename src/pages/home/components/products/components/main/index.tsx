import { useState } from "react";

import { useRouter } from "next/router";

import { ProductCard } from "@components/cards";
import { Pagination } from "@components/common/pagination";
import { Loader, Typography } from "@components/ui";
import { useProductsQuery } from "@store/api";
import { TagVariant } from "@utils/enums/components";

import { Queries } from "../sidebar/components";
import { Filter } from "./components/filter";
import { MobileFilter } from "./components/mobile-filter";
import { Sort } from "./components/sort";
import * as S from "./main.styled";
import { useTranslation } from "next-i18next";

export const Main = () => {
  const { t } = useTranslation();

  const LIMIT = 9;
  const [page, setPage] = useState(1);

  const { query } = useRouter();

  const { data, isFetching } = useProductsQuery({ ...query, _page: page, _limit: LIMIT });

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
      <S.Content>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            {data?.products?.length > 0 ? (
              <S.List>
                {data?.products?.map((product) => (
                  <ProductCard key={product._id} {...product} />
                ))}
              </S.List>
            ) : (
              <Typography tag="h2" variant={TagVariant.h2}>
                {t("pages.home.products.empty")}
              </Typography>
            )}
          </>
        )}
      </S.Content>
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
};
