import { Categories, PriceRange, Queries, Sizes } from "./components";
import * as S from "./sidebar.styled";

export const Sidebar = () => (
  <S.Sidebar>
    <Queries />
    <Categories />
    <PriceRange />
    <Sizes />
  </S.Sidebar>
);
