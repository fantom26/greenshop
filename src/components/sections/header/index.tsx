import { FC, useEffect, useState } from "react";

import { Button, Logo } from "@components/ui";
import { ICONS } from "@constants";
import { useScrollLock, useTranslation } from "@hooks";

import { Burger, Cart, Navigation, Search } from "./components";
import { MobileNav } from "./components/mobile-nav";
import * as S from "./header.styled";

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
