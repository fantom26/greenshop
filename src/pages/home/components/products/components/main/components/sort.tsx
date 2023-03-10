import { useState } from "react";

import { useRouter } from "next/router";

import { Typography } from "@components/ui";
import { ICONS, SORT_KEYS } from "@constants";
import { useTranslation } from "@hooks";

import * as S from "./sort.styled";

export const Sort = () => {
  const t = useTranslation();
  const [current, setCurrent] = useState(t.sort.default);

  const { query, push } = useRouter();

  const onClick = (filterOption: string) => {
    setCurrent(t.sort[filterOption]);

    switch (filterOption) {
      case "default":
        push(
          {
            query: {
              ...Object.fromEntries(Object.entries(query).filter(([key]) => SORT_KEYS.includes(key)))
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

  return (
    <S.Sort>
      <Typography tag="p">{t.pages.home.products.sortBy}</Typography>
      <S.Wrapper>
        <S.Current>
          <span>{current}</span>
          <span>{ICONS.dropdownArrow}</span>
        </S.Current>
        <S.Dropdown>
          {Object.entries(t.sort)
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
