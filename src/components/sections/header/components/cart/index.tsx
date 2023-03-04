import { ICONS } from "@constants";
import { useCart } from "@hooks";
import Link from "next/link";
import * as S from "./cart.styled";

export const Cart = () => {
  const { cartQuantity } = useCart();

  return (
    <S.Wrapper>
      <Link href="/cart">{ICONS.cart}</Link>
      <S.Quantity shown={cartQuantity > 0}>{cartQuantity}</S.Quantity>
    </S.Wrapper>
  );
};
