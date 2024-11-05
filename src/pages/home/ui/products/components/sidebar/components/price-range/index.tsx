import { FC, useEffect, useMemo, useRef, useState } from "react";

import { Button, Typography } from "@/shared/ui";
import { useProductsQuery } from "@/store/api";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Nouislider from "nouislider-react";

import * as S from "./price-range.styled";

export const PriceRange: FC<{ mobileHandler?: () => void }> = ({ mobileHandler }) => {
  const { t } = useTranslation("home");
  const [prices, setPrices] = useState<string[]>(["00.00", "00.00"]);
  const { push, query } = useRouter();
  const { data } = useProductsQuery({});
  const rangeRef = useRef<any | null>(null);

  const boundaryValues = useMemo(() => {
    const prices = data?.products.map((product) => product.price);

    if (prices) {
      const max = Math.max(...prices);
      const min = Math.min(...prices);

      return { min, max };
    }
  }, [data?.products]);

  const onChangeSlide = (data: string[]) => {
    setPrices(data);
  };

  const onFilter = () => {
    const [min, max] = prices;
    push(
      {
        // eslint-disable-next-line camelcase
        query: { ...query, price_gte: min, price_lte: max }
      },
      "",
      { scroll: false }
    );

    if (mobileHandler) {
      mobileHandler();
    }
  };

  useEffect(() => {
    if (!prices.length || !prices[1]) {
      setPrices([`${boundaryValues?.min}.00`, `${boundaryValues?.max}.00`]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boundaryValues]);

  useEffect(() => {
    if (!query.hasOwnProperty("price_gte")) {
      if (rangeRef.current) {
        rangeRef.current.noUiSlider.reset();
        if (boundaryValues?.min) {
          setPrices([`${boundaryValues?.min}.00`, `${boundaryValues?.max}.00`]);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <S.PriceRange>
      <Typography tag="h3" variant="h4">
        {t("products.priceTitle")}
      </Typography>
      <S.SliderWrapper>
        <Nouislider
          instanceRef={(instance: any) => {
            if (instance && !rangeRef.current) {
              rangeRef.current = instance;
            }
          }}
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
        <Button onClick={onFilter} variant="solid">
          {t("btn.filter")}
        </Button>
      </S.ButtonWrapper>
    </S.PriceRange>
  );
};
