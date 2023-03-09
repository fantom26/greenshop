import { useState } from "react";

import { useRouter } from "next/router";

import { ProductCard } from "@components/cards";
import { Spring, Typography } from "@components/ui";
import { useTabs, useTranslation } from "@hooks";
import { useProductsQuery } from "@store/api";
import { TagVariant } from "@utils/enums/components";

import * as S from "./main.styled";
import { Circle, Square, Triangle } from "./shapes";

export const Main = () => {
  const t = useTranslation();
  const [hookProps] = useState({
    tabs: [
      {
        label: t.pages.home.products.tab1,
        children: <Circle />,
        id: t.pages.home.products.tab1
      },
      {
        label: t.pages.home.products.tab2,
        children: <Triangle />,
        id: t.pages.home.products.tab2
      },
      {
        label: t.pages.home.products.tab3,
        children: <Square />,
        id: t.pages.home.products.tab3
      }
    ],
    initialTabId: t.pages.home.products.tab1
  });
  const { query } = useRouter();

  const spring = useTabs(hookProps);

  const { data: products } = useProductsQuery(query);

  return (
    <S.Main>
      <S.Top>{/* <Spring.Tabs {...spring.tabProps} /> */}</S.Top>
      <S.Content>
        {/* <Spring.Content {...spring.contentProps} /> */}
        {products?.length > 0 ? (
          <S.List>
            {products?.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </S.List>
        ) : (
          <Typography tag="h2" variant={TagVariant.h2}>
            {t.pages.home.products.empty}
          </Typography>
        )}
      </S.Content>
    </S.Main>
  );
};
