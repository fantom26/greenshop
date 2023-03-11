import { FC, useMemo } from "react";

import { useRouter } from "next/router";

import { Typography } from "@components/ui";
import { IProduct } from "@declarations";
import { useProductsQuery } from "@store/api";
import { TagVariant } from "@utils/enums/components";

import * as S from "./filter-list.styled";

interface FilterProps {
  title: string;
  items: string[];
  queryName: string;
}

const getSizeLetter = (name: string) =>
  name
    .match(/\((\w+)\)/g)
    .map((match) => match.substring(1, match.length - 1))
    .join("");

export const Filter: FC<FilterProps> = ({ title, items, queryName }) => {
  const router = useRouter();

  const { data } = useProductsQuery();

  const optionsWithCount = useMemo(
    () =>
      items?.reduce((options, item) => {
        const count = data?.products.filter((product) =>
          queryName === "size" ? product[queryName].includes(getSizeLetter(item)) : product[queryName as keyof IProduct] === item
        ).length;
        return [...options, { name: item, count }];
      }, []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data?.products, items]
  );

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

  return (
    <>
      <Typography tag="h3" variant={TagVariant.h4}>
        {title}
      </Typography>
      <S.List>
        {optionsWithCount?.map(({ name, count }, index) => (
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
};
