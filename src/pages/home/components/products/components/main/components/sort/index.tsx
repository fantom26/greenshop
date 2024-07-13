import { useEffect, useState } from "react";

import { FILTER_KEYS, ICONS, SORT_KEYS } from "@/utils/constants";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Typography } from "@components/ui";

import * as S from "./sort.styled";

export const Sort = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(t("sort.default"));

  const { query, push, asPath } = useRouter();

  const onClick = (filterOption: string) => {
    setCurrent(t(`sort.${filterOption}`));

    switch (filterOption) {
      case "default":
        push(
          {
            query: {
              ...Object.fromEntries(Object.entries(query).filter(([key]) => [...SORT_KEYS, ...FILTER_KEYS].includes(key)))
            }
          },
          "",
          { scroll: false }
        );
        break;
      case "priceDesc":
        push(
          {
            query: {
              ...query,
              _sort: "price",
              _order: "desc"
            }
          },
          "",
          { scroll: false }
        );
        break;
      case "priceAsc":
        push(
          {
            query: {
              ...query,
              _sort: "price",
              _order: "asc"
            }
          },
          "",
          { scroll: false }
        );
        break;

      default:
        break;
    }
  };

  const sort = t("sort", { returnObjects: true });

  useEffect(() => {
    if (asPath.includes("_sort") && asPath.includes("_order")) {
      if (query._order === "asc") {
        setCurrent(t("sort.priceAsc"));
      } else {
        setCurrent(t("sort.priceDesc"));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <S.Sort>
      <Typography tag="h3" variant="h4">
        {t("pages.home.products.sortBy")}
      </Typography>
      <S.Wrapper>
        <S.Current>
          <span>{current}</span>
          <span>{ICONS.dropdownArrow}</span>
        </S.Current>
        <S.Dropdown>
          {Object.entries(sort)
            .filter(([_, sortBy]) => sortBy !== current)
            .map(([key, sortBy]) => (
              <S.Item key={key} onClick={() => onClick(key)}>
                <span>{sortBy}</span>
              </S.Item>
            ))}
        </S.Dropdown>
      </S.Wrapper>
    </S.Sort>
  );
};
