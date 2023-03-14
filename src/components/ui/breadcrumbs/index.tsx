import { FC } from "react";

import { IBreadcrumb } from "@declarations";

import { Container } from "../container";
import * as S from "./breadcrumbs.styled";
import { BreadcrumbItem } from "./item";

export const Breadcrumbs: FC<{ items: IBreadcrumb[] }> = ({ items }) => (
  <S.Breadcrumbs>
    <Container>
      <S.List>
        {items.map((item) => (
          <BreadcrumbItem key={item.t} item={item} />
        ))}
      </S.List>
    </Container>
  </S.Breadcrumbs>
);
