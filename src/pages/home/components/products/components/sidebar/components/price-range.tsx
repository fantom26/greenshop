import { useEffect, useMemo, useState } from "react";

import Nouislider from "nouislider-react";

import { Button, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { useProductsQuery } from "@store/api";
import { ButtonVariant, TagVariant } from "@utils/enums/components";

import * as S from "./price-range.styled";

export const PriceRange = () => {
  const t = useTranslation();
  const [prices, setPrices] = useState([]);
  const { data: products } = useProductsQuery();

  const boundaryValues = useMemo(() => {
    const prices = products?.map((product) => product.price);

    if (prices) {
      const max = Math.max(...prices);
      const min = Math.min(...prices);

      return { min, max };
    }
  }, [products]);

  const onChangeSlide = (data: string[]) => {
    setPrices(data);
  };

  useEffect(() => {
    if (!prices.length || !prices[1]) {
      if (boundaryValues?.min) {
        setPrices([`${boundaryValues?.min}.00`, `${boundaryValues?.max}.00`]);
      } else {
        setPrices([boundaryValues?.min, boundaryValues?.max]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boundaryValues]);

  return (
    <S.PriceRange>
      <Typography tag="h3" variant={TagVariant.h4}>
        {t.pages.home.products.priceTitle as string}
      </Typography>
      <S.SliderWrapper>
        <Nouislider
          onSlide={onChangeSlide}
          range={{ min: boundaryValues?.min || 0, max: boundaryValues?.max || 1000 }}
          start={[boundaryValues?.min || 0, boundaryValues?.max || 1000]}
          connect
        />
      </S.SliderWrapper>
      <S.SelectedPrice>
        Price
        <span>
          ${prices.at(0)} - ${prices.at(1)}
        </span>
      </S.SelectedPrice>
      <S.ButtonWrapper>
        <Button variant={ButtonVariant.solid}>{t.btn.filter}</Button>
      </S.ButtonWrapper>
    </S.PriceRange>
  );
};
