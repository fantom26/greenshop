import { useEffect, useMemo, useRef, useState } from "react";

import { useFetchProducts } from "@/hooks";
import { useTranslation } from "next-i18next";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Nouislider from "nouislider-react";

import { Button, Typography } from "@/shared/ui";

import * as S from "./price-range.styled";

// TODO refactor this component. What about replacing query to searchParams?
export function PriceRange({ mobileHandler }: { mobileHandler?: () => void }) {
  const { t } = useTranslation("home");
  const [prices, setPrices] = useState<string[]>(["00.00", "00.00"]);
  const { push, query } = useRouter();
  const searchParams = useSearchParams();
  const { data } = useFetchProducts({});
  const rangeRef = useRef<any | null>(null);

  const boundaryValues = useMemo(() => {
    const priceRange = data?.products.map((product) => product.price) || [];

    if (priceRange.length > 0) {
      const max = Math.max(...priceRange);
      const min = Math.min(...priceRange);

      return { min, max };
    }

    return { min: 0, max: 1000 };
  }, [data?.products]);

  const onChangeSlide = (newRangeValue: string[]) => {
    setPrices(newRangeValue);
  };

  const onFilter = () => {
    const [min, max] = prices;
    push(
      {
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
    if (!searchParams.has("price_gte")) {
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
          range={{
            min: boundaryValues.min,
            max: boundaryValues.max
          }}
          start={[boundaryValues.min, boundaryValues.max]}
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
}
