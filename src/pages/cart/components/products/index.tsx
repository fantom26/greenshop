import { useCart, useTranslation } from "@hooks";

import * as S from "./products.styled";

export const Products = () => {
  const t = useTranslation();
  const { cartItems } = useCart();
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
            <p>Name: {item.name}</p>
            <p>SKU: {item.sku}</p>
          </S.Item>
        ))}
      </S.List>
    </S.Products>
  );
};
