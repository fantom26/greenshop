import { FC } from "react";

import { Container } from "@/shared/ui";
import { IBreadcrumb } from "@/utils/declarations";

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
