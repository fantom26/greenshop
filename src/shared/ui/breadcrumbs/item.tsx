import { FC } from "react";

import { IBreadcrumb } from "@/utils/declarations";
import Link from "next/link";

import * as S from "./breadcrumbs.styled";

export const BreadcrumbItem: FC<{ item: IBreadcrumb }> = ({ item }) => {
  const isLast = !item.route;
  const content = isLast ? (
    item.t
  ) : (
    <Link href={item.route}>
      <span>{item.t}</span>
      <span>/</span>
    </Link>
  );

  return <S.Item last={isLast}>{content}</S.Item>;
};
