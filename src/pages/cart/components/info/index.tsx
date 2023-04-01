import { Container } from "@components/ui";

import { Products, Total } from "./components";
import * as S from "./info.styled";

export const Info = () => (
  <S.Section>
    <Container>
      <S.Wrapper>
        <Products />
        <Total />
      </S.Wrapper>
    </Container>
  </S.Section>
);
