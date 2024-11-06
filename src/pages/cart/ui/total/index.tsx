import { useMemo } from "react";

import { useCart } from "@/hooks";
import { SHIPPING_PRICE } from "@/utils/constants";
import { useTranslation } from "next-i18next";

import { Button, Typography } from "@/shared/ui";

import * as S from "./total.styled";

export const Total = () => {
  const { t } = useTranslation("cart");
  const { sumOfOrder } = useCart();

  const total = useMemo(() => sumOfOrder + SHIPPING_PRICE, [sumOfOrder]);

  return (
    <S.Total>
      <S.Header>
        <Typography variant="h4" tag="h2">
          {t("cartTotal")}
        </Typography>
      </S.Header>
      <S.List>
        <S.Item>
          <p>{t("subtotal")}</p>
          <Typography variant="h4" tag="h3">
            {`$${sumOfOrder.toFixed(2)}`}
          </Typography>
        </S.Item>
        <S.Item>
          <p>{t("shipping")}</p>
          <Typography variant="h4" tag="h3">
            {`$${SHIPPING_PRICE.toFixed(2)}`}
          </Typography>
        </S.Item>
        <S.Item titleBold>
          <p>{t("total")}</p>
          <Typography variant="h4" tag="h3">
            {`$${total.toFixed(2)}`}
          </Typography>
        </S.Item>
      </S.List>
      <Button path="/checkout">{t("btn.toCheckout")}</Button>
      <S.LinkWrapper>
        <S.NextLink href="/">{t("btn.continueShopping")}</S.NextLink>
      </S.LinkWrapper>
    </S.Total>
  );
};
