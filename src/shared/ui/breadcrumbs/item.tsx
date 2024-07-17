import { FC } from "react";

import Link from "next/link";

import { IBreadcrumb } from "@/utils/declarations";

import * as S from "./breadcrumbs.styled";

export const BreadcrumbItem: FC<{ item: IBreadcrumb }> = ({ item }) => {
  const isLast = !item.route;

  return (
    <S.Item last={isLast}>
      {!isLast && (
        <Link href={item.route}>
          <span>{item.t}</span>
          <span>/</span>
        </Link>
      )}
      {isLast && item.t}
    </S.Item>
  );
};
