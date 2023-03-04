import { FC, ReactNode, useEffect, useState } from "react";

import { Drawer } from "@components/common";
import { Button, Logo } from "@components/ui";

import { useScrollLock, useTranslation } from "@hooks";
import * as S from "./header.styled";
import { Navigation, Search, Cart, Burger } from "./components";
import { ICONS } from "@constants";
import { MobileNav } from "./components/mobile-nav";

export const Header: FC = () => {
  const t = useTranslation();
  const { lockScroll, unlockScroll } = useScrollLock();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuIsOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuIsOpen]);

  return (
    <>
      <MobileNav open={menuIsOpen} />
      <S.Header menuIsOpen>
        <S.HeaderContainer>
          <S.HeaderWrapper>
            <Logo />
            <Navigation />
            <S.SearchWrapper>
              <Search />
            </S.SearchWrapper>
            <Cart />
            <S.ButtonWrapper>
              <Button path="/login" startIcon={ICONS.login}>
                {t.btn.login}
              </Button>
            </S.ButtonWrapper>
            <Burger toggler={toggleMenu} active={menuIsOpen} />
          </S.HeaderWrapper>
        </S.HeaderContainer>
      </S.Header>
    </>
  );
};
