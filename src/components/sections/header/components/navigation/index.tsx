import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "@hooks";

import * as S from "./navigation.styled";

export const Navigation = () => {
  const t = useTranslation();
  const { pathname } = useRouter();

  return (
    <S.Nav>
      <S.List>
        {Object.entries(t.navigation).map(([key, name]) => (
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
