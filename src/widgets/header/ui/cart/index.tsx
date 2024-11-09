import { useCartContext } from "@/hooks";
import Link from "next/link";

import { ICONS } from "@/shared/svgs";

import * as S from "./cart.styled";

function Cart() {
  const {
    cartSummary: { quantity }
  } = useCartContext();

  return (
    <S.Wrapper disabled={quantity === 0}>
      <Link href="/cart">{ICONS.cart}</Link>
      <S.Quantity shown={quantity > 0}>{quantity}</S.Quantity>
    </S.Wrapper>
  );
}

export default Cart;
