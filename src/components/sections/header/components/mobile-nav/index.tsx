import { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { animated, useTransition } from "@react-spring/web";

import { Drawer } from "@components/common";
import { Button } from "@components/ui";
import { ICONS } from "@constants";
import { useTranslation } from "@hooks";

import { Search } from "../search";
import * as S from "./mobile-nav.styled";

export const MobileNav: FC<{ open: boolean }> = ({ open }) => {
  const t = useTranslation();
  const { pathname } = useRouter();

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
            {Object.entries(t.navigation).map(([key, name]) => (
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
            {t.btn.login}
          </Button>
        </animated.div>
      </Drawer>
    ) : null
  );
};
