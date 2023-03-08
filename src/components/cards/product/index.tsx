import { FC } from "react";

import Image from "next/image";

import { NEXT_PUBLIC_APP_URL } from "@constants";
import { IProduct } from "@declarations";

import * as S from "./product.styled";

export const ProductCard: FC<IProduct> = (props) => {
  const { poster, name, price } = props;
  const { url, meta } = poster;
  return (
    <S.Product>
      <S.ImageWrapper>
        <Image src={`${NEXT_PUBLIC_APP_URL}${url}`} width="250" height="250" alt={meta.alt} />
      </S.ImageWrapper>
      <p>{name}</p>
      <S.Price>${price}</S.Price>
    </S.Product>
  );
};
