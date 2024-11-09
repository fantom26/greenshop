import { CustomImage } from "@/shared/ui";

import { Categories, PriceRange, Queries, Sizes } from "./components";
import * as S from "./sidebar.styled";

export function Sidebar() {
  return (
    <S.Sidebar>
      <S.Filter>
        <Queries />
        <Categories />
        <PriceRange />
        <Sizes />
      </S.Filter>
      <S.Banner>
        <CustomImage
          src="images/mock/sale@1x.jpg"
          width="310"
          height="470"
          alt="sale"
        />
      </S.Banner>
    </S.Sidebar>
  );
}
