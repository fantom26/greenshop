import { useMemo, useState } from "react";

import { useCart } from "@/hooks";
import { IProduct } from "@/utils/declarations";
import FsLightbox from "fslightbox-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { NEXT_PUBLIC_APP_URL } from "@/shared/config";
import { ICONS } from "@/shared/svgs";

import { CustomImage } from "../image";
import * as S from "./product.styled";

export function ProductCard({
  _id: id,
  poster,
  name,
  sku,
  price,
  discountPercentage
}: IProduct) {
  const { url, meta } = poster;
  const { t } = useTranslation("common");

  const [toggler, setToggler] = useState(false);

  const oldPrice = useMemo(
    () => Math.ceil(price + (price * discountPercentage) / 100).toFixed(2),
    [price, discountPercentage]
  );

  const { getProductQuantity, increaseCartQuantity } = useCart();

  const addToCart = () => {
    increaseCartQuantity({
      poster,
      price,
      quantity: 1,
      name,
      sku,
      _id: id
    });
  };

  return (
    <>
      <S.Product>
        {discountPercentage > 0 ? (
          <S.Sale>{discountPercentage}% OFF</S.Sale>
        ) : null}
        <S.ImageWrapper>
          <CustomImage
            src={`${NEXT_PUBLIC_APP_URL}${url}`}
            width="250"
            height="250"
            alt={meta.alt}
          />
          <S.Controls>
            <S.Control onClick={addToCart}>
              {ICONS.cart}
              <S.Quantity shown={getProductQuantity(id) > 0}>
                {getProductQuantity(id)}
              </S.Quantity>
            </S.Control>
            {/* <S.Control>{ICONS.like}</S.Control> */}
            <S.Control onClick={() => setToggler(!toggler)} title={t("scale")}>
              {ICONS.search}
            </S.Control>
          </S.Controls>
        </S.ImageWrapper>
        <S.Name>
          <Link href={`/products/${id}`}>{name}</Link>
        </S.Name>
        <S.Prices>
          <S.Price>${price.toFixed(2)}</S.Price>
          {discountPercentage > 0 ? <S.OldPrice>${oldPrice}</S.OldPrice> : null}
        </S.Prices>
      </S.Product>
      <FsLightbox
        toggler={toggler}
        sources={[`${NEXT_PUBLIC_APP_URL}${url}`.replace("@1x", "@2x")]}
        type="image"
      />
    </>
  );
}
