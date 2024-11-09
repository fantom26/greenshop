import { IProduct } from "@/utils/declarations";
import { useTranslation } from "next-i18next";
import { ErrorBoundary } from "react-error-boundary";
import useSWR from "swr";

import { Container } from "@/shared/ui";
import InterestedIn from "@/widgets/interested-in";

import * as S from "./info.styled";
import { Products } from "./products";
import { Total } from "./total";

export function Cart() {
  const { t } = useTranslation("common");
  const { data: products = [] } = useSWR<IProduct[]>("/interestedIn");
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
        <InterestedIn title={t("interestedIn")} products={products} />
      </ErrorBoundary>
    </>
  );
}
