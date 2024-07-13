import { useMemo } from "react";

import { SHIPPING_PRICE } from "@/utils/constants";
import { useTranslation } from "next-i18next";

import { Button, Typography } from "@components/ui";
import { useCart } from "@hooks";

import * as S from "./total.styled";

export const Total = () => {
  const { t } = useTranslation();
  const { sumOfOrder } = useCart();

  const total = useMemo(() => sumOfOrder + SHIPPING_PRICE, [sumOfOrder]);

  return (
    <S.Total>
      <S.Header>
        <Typography variant="h4" tag="h2">
          {t("pages.cart.cartTotal")}
        </Typography>
      </S.Header>
      <S.List>
        <S.Item>
          <p>{t("pages.cart.subtotal")}</p>
          <Typography variant="h4" tag="h3">
            {`$${sumOfOrder.toFixed(2)}`}
          </Typography>
        </S.Item>
        <S.Item>
          <p>{t("pages.cart.shipping")}</p>
          <Typography variant="h4" tag="h3">
            {`$${SHIPPING_PRICE.toFixed(2)}`}
          </Typography>
        </S.Item>
        <S.Item titleBold>
          <p>{t("pages.cart.total")}</p>
          <Typography variant="h4" tag="h3">
            {`$${total.toFixed(2)}`}
          </Typography>
        </S.Item>
      </S.List>
      <Button path="/checkout">{t("btn.toCheckout")}</Button>
      <S.LinkWrapper>
        <S.NextLink href="/">{t("btn.сontinueShopping")}</S.NextLink>
      </S.LinkWrapper>
    </S.Total>
  );
};
