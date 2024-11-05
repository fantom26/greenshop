import { FC } from "react";

import { Typography } from "@/shared/ui";
import { useProductsQuery } from "@/store/api";
import { IProduct } from "@/utils/declarations";
import { useRouter } from "next/router";

import * as S from "./filter-list.styled";
import { getSizeLetter } from "./helper";

interface FilterProps {
  title: string;
  items: string[];
  queryName: string;
}

export const Filter: FC<FilterProps> = ({ title, items, queryName }) => {
  const router = useRouter();

  const { data } = useProductsQuery({});

  let content = null;

  if (data) {
    const optionsWithCount = items.reduce<{ name: string; count: number }[]>((options, item) => {
      const count = data.products.filter((product) =>
        queryName === "size" ? product[queryName].includes(getSizeLetter(item)) : product[queryName as keyof IProduct] === item
      ).length;

      options.push({ name: item, count });
      return options;
    }, []);

    const onClick = (filterOption: string) => {
      if (queryName === "size") {
        router.push(
          {
            query: {
              ...router.query,
              // eslint-disable-next-line camelcase
              size_like: getSizeLetter(filterOption)
            }
          },
          "",
          { scroll: false }
        );
      } else {
        router.push(
          {
            query: {
              ...router.query,
              [queryName]: filterOption
            }
          },
          "",
          { scroll: false }
        );
      }
    };

    content = (
      <>
        <Typography tag="h3" variant="h4">
          {title}
        </Typography>
        <S.List>
          {optionsWithCount.map(({ name, count }, index) => (
            <S.Item
              key={index}
              selected={queryName === "size" ? name.includes(`(${router.query.size_like})`) : router.query[queryName] === name}
              onClick={() => onClick(name)}
            >
              <span>{name}</span>
              <span>({count})</span>
            </S.Item>
          ))}
        </S.List>
      </>
    );
  }

  return content;
};
