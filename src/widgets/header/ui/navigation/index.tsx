import { useCallback } from "react";

import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./navigation.styled";

const ROUTES = [
  { label: "home", route: "/" },
  { label: "shop", route: "/shop" },
  { label: "care", route: "/care" },
  { label: "blogs", route: "/blogs" }
];

export function Navigation() {
  const { t } = useTranslation("common");
  const { pathname, locale } = useRouter();

  const checkIsLinkActive = useCallback(
    (href: string) => {
      const localizedHref = `/${locale}${href === "/" ? "" : href}`;

      return pathname === href || pathname === localizedHref;
    },
    [pathname, locale]
  );

  return (
    <S.Nav>
      <S.List>
        {ROUTES.map(({ label, route }) => (
          <S.Li key={label}>
            <Link href={route} passHref legacyBehavior>
              <S.Link isActive={checkIsLinkActive(route)}>
                {t(`navigation.${label}`)}
              </S.Link>
            </Link>
          </S.Li>
        ))}
      </S.List>
    </S.Nav>
  );
}
