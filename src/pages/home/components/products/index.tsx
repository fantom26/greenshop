import { Container } from "@components/ui";

import { Sidebar } from "./components/sidebar/index";
import * as S from "./products.styled";

export const Products = () => (
  <S.Products>
    <Container>
      <Sidebar />
    </Container>
  </S.Products>
);
