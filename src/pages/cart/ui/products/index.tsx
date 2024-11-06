import { useEffect } from "react";

import { useCartContext } from "@/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { NEXT_PUBLIC_APP_URL } from "@/shared/config";
import { ICONS } from "@/shared/svgs";
import { CustomImage, Typography } from "@/shared/ui";

import * as S from "./products.styled";

export function Products() {
  const { t } = useTranslation("cart");
  const { push } = useRouter();
  const {
    cartItems,
    getProductQuantity,
    decreaseCartQuantity,
    countPriceByQuantity,
    increaseCartQuantity,
    cartSummary: { quantity }
  } = useCartContext();

  const headers = t("headers", { returnObjects: true }) as string[];

  useEffect(() => {
    if (!quantity) {
      push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <S.Products>
      <S.Headers>
        {headers.map((header) => (
          <S.Header key={header}>{header}</S.Header>
        ))}
      </S.Headers>
      <S.List>
        {cartItems.map((item) => (
          <S.Item key={item._id}>
            <S.Wrapper>
              <S.Poster href={`/product/${item._id}`}>
                <CustomImage
                  src={`${NEXT_PUBLIC_APP_URL}/${item.poster.url}`}
                  width="70"
                  height="70"
                  alt={item.poster.meta?.alt}
                  title={item.poster.meta?.title}
                />
              </S.Poster>
              <div>
                <S.Name href={`/product/${item._id}`}>{item.name}</S.Name>
                <S.SKU>
                  SKU: <span>${item.sku}</span>
                </S.SKU>
              </div>
            </S.Wrapper>
            <S.Wrapper>
              <S.Price>{`$${item.price}`}</S.Price>
              <S.Controls>
                <S.Control
                  type="button"
                  onClick={() => decreaseCartQuantity(item)}
                  disabled={getProductQuantity(item._id) === 1}
                >
                  -
                </S.Control>
                <S.Count>{getProductQuantity(item._id)}</S.Count>
                <S.Control
                  type="button"
                  onClick={() => increaseCartQuantity(item)}
                >
                  +
                </S.Control>
              </S.Controls>
            </S.Wrapper>
            <S.Wrapper>
              <Typography variant="h4" color="green">
                {`$${countPriceByQuantity(item._id)}`}
              </Typography>
              <S.Delete
                type="button"
                onClick={() => decreaseCartQuantity(item)}
              >
                {ICONS.recycleBin}
              </S.Delete>
            </S.Wrapper>
          </S.Item>
        ))}
      </S.List>
    </S.Products>
  );
}
