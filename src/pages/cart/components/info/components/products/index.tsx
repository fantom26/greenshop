import { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { Typography } from "@components/ui";
import { ICONS, NEXT_PUBLIC_APP_URL } from "@/utils/constants";
import { useCart, useTranslation } from "@hooks";
import { ColorVariant, TagVariant } from "@utils/enums/components";

import * as S from "./products.styled";

export const Products = () => {
  const t = useTranslation();
  const { push } = useRouter();
  const { cartItems, getProductQuantity, decreaseCartQuantity, countPriceByQuantity, increaseCartQuantity, removeFromCart, cartQuantity } = useCart();

  useEffect(() => {
    if (!cartQuantity) {
      push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartQuantity]);

  return (
    <S.Products>
      <S.Headers>
        {t.pages.cart.headers.map((header) => (
          <S.Header key={header}>{header}</S.Header>
        ))}
      </S.Headers>
      <S.List>
        {cartItems.map((item) => (
          <S.Item key={item._id}>
            <S.Wrapper>
              <S.Poster href={`/product/${item._id}`}>
                <Image src={`${NEXT_PUBLIC_APP_URL}/${item.poster.url}`} width="70" height="70" alt={item.poster.meta?.alt} title={item.poster.meta?.title} />
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
                <S.Control type="button" onClick={() => decreaseCartQuantity(item)} disabled={getProductQuantity(item._id) === 1}>
                  -
                </S.Control>
                <S.Count>{getProductQuantity(item._id)}</S.Count>
                <S.Control type="button" onClick={() => increaseCartQuantity(item)}>
                  +
                </S.Control>
              </S.Controls>
            </S.Wrapper>
            <S.Wrapper>
              <Typography variant={TagVariant.h4} color={ColorVariant.green}>
                {`$${countPriceByQuantity(item._id)}`}
              </Typography>
              <S.Delete type="button" onClick={() => removeFromCart(item._id)}>
                {ICONS.recycleBin}
              </S.Delete>
            </S.Wrapper>
          </S.Item>
        ))}
      </S.List>
    </S.Products>
  );
};
