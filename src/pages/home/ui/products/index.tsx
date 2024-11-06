import { Container } from "@/shared/ui";

import { Main } from "./components/main";
import { Sidebar } from "./components/sidebar";
import * as S from "./products.styled";

export function Products() {
  return <S.Products>
    <Container>
      <S.ProductsWrapper>
        <Sidebar />
        <Main />
      </S.ProductsWrapper>
    </Container>
  </S.Products>
}
