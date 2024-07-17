import { Container } from "@/shared/ui";

import { Main } from "./components/main";
import { Sidebar } from "./components/sidebar";
import * as S from "./products.styled";

export const Products = () => (
  <S.Products>
    <Container>
      <S.ProductsWrapper>
        <Sidebar />
        <Main />
      </S.ProductsWrapper>
    </Container>
  </S.Products>
);
