import { useCart } from "@/hooks";
import { ICONS } from "@/shared/svgs";
import Link from "next/link";

import * as S from "./cart.styled";

export const Cart = () => {
  const { cartQuantity } = useCart();

  return (
    <S.Wrapper disabled={cartQuantity === 0}>
      <Link href="/cart">{ICONS.cart}</Link>
      <S.Quantity shown={cartQuantity > 0}>{cartQuantity}</S.Quantity>
    </S.Wrapper>
  );
};
