import Image from "next/image";

import { Categories, PriceRange, Queries, Sizes } from "./components";
import * as S from "./sidebar.styled";

import { NEXT_PUBLIC_APP_URL } from "@/shared/config";
export const Sidebar = () => (
  <>
    <S.Sidebar>
      <S.Filter>
        <Queries />
        <Categories />
        <PriceRange />
        <Sizes />
      </S.Filter>
      <S.Banner>
        <Image src={`${NEXT_PUBLIC_APP_URL}/images/mock/sale@1x.jpg`} width="310" height="470" alt="sale" />
      </S.Banner>
    </S.Sidebar>
  </>
);
