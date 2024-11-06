import { IBreadcrumb } from "@/utils/declarations";

import { Container } from "../container";
import * as S from "./breadcrumbs.styled";
import { BreadcrumbItem } from "./item";

export function Breadcrumbs({ items }: { items: IBreadcrumb[] }) {
  return (
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
}
