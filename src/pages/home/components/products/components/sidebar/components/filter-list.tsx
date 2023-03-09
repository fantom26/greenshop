import { FC } from "react";

import { useRouter } from "next/router";

import { Typography } from "@components/ui";
import { TagVariant } from "@utils/enums/components";

import * as S from "./filter-list.styled";

interface FilterProps {
  title: string;
  items: string[];
  queryName: string;
}

export const Filter: FC<FilterProps> = ({ title, items, queryName }) => {
  const router = useRouter();

  const onClick = (filterOption: string) => {
    router.push(
      {
        query: {
          ...router.query,
          [queryName]: queryName === "size" ? filterOption.match(/\((\w+)\)/g).map((match) => match.substring(1, match.length - 1)) : filterOption
        }
      },
      "",
      { scroll: false }
    );
  };

  return (
    <>
      <Typography tag="h3" variant={TagVariant.h4}>
        {title}
      </Typography>
      <S.List>
        {items?.map((item, index) => (
          <S.Item
            key={index}
            selected={queryName === "size" ? item.includes(`(${router.query[queryName]})`) : router.query[queryName] === item}
            onClick={() => onClick(item)}
          >
            {item}
          </S.Item>
        ))}
      </S.List>
    </>
  );
};
