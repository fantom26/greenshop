import { useTranslation } from "@hooks";

import { Categories } from "./components/categories";
import { PriceRange } from "./components/price-range";
import * as S from "./sidebar.styled";

export const Sidebar = () => {
  const t = useTranslation();
  return (
    <S.Sidebar>
      <Categories />
      <PriceRange />
    </S.Sidebar>
  );
};
