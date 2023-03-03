import { useTranslation } from "@hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./navigation.styled";

export const Navigation = () => {
  const t = useTranslation();
  const { pathname } = useRouter();

  return (
    <nav>
      <S.NavigationList>
        {Object.entries(t.navigation).map(([key, name]) => (
          <li key={key}>
            <Link href={key} passHref legacyBehavior>
              <S.LinkText pathname={pathname}>{name}</S.LinkText>
            </Link>
          </li>
        ))}
      </S.NavigationList>
    </nav>
  );
};
