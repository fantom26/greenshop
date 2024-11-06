import { FC } from "react";

import { animated, useTransition } from "react-spring";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import { ICONS } from "@/shared/svgs";
import { Button, Drawer } from "@/shared/ui";

import { Search } from "../search";
import * as S from "./mobile-nav.styled";

export const MobileNav: FC<{ open: boolean }> = ({ open }) => {
  const { t } = useTranslation("common");
  const { pathname } = useRouter();

  const navigation = t("navigation", { returnObjects: true });

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)"
    },
    enter: {
      opacity: 1,
      transformMain: "translateY(0px)",
      transformFoot: "translateY(0px)"
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)"
    }
  });

  return transition(({ opacity, transformMain, transformFoot }, visible) =>
    visible ? (
      <Drawer visible={open} tag={S.Wrapper}>
        <S.SearchWrapper style={{ opacity }}>
          <Search />
        </S.SearchWrapper>
        <S.Nav style={{ opacity }}>
          <S.List style={{ transform: transformMain }}>
            {Object.entries(navigation).map(([key, name]) => (
              <li key={key}>
                <Link href={key} passHref legacyBehavior>
                  <S.Link pathname={pathname}>{name}</S.Link>
                </Link>
              </li>
            ))}
          </S.List>
        </S.Nav>
        <animated.div style={{ transform: transformFoot }}>
          <Button path="/login" startIcon={ICONS.login}>
            {t("btn.login")}
          </Button>
        </animated.div>
      </Drawer>
    ) : null
  );
};
