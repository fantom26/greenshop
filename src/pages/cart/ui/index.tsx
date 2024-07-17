import { Container } from "@/shared/ui";
import { InterestedIn } from "@/widgets/interested-in";
import { useTranslation } from "next-i18next";
import { ErrorBoundary } from "react-error-boundary";

import * as S from "./info.styled";
import { Products } from "./products";
import { Total } from "./total";

export const Cart = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <S.Section>
          <Container>
            <S.Wrapper>
              <Products />
              <Total />
            </S.Wrapper>
          </Container>
        </S.Section>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <InterestedIn title={t("interestedIn")} />
      </ErrorBoundary>
    </>
  );
};
