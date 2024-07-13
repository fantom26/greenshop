import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import * as S from "./navigation.styled";

export const Navigation = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const navigation = t("navigation", { returnObjects: true });

  return (
    <S.Nav>
      <S.List>
        {Object.entries(navigation).map(([key, name]) => (
          <S.Li key={key}>
            <Link href={key} passHref legacyBehavior>
              <S.Link pathname={pathname}>{name}</S.Link>
            </Link>
          </S.Li>
        ))}
      </S.List>
    </S.Nav>
  );
};
