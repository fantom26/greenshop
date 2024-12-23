import { useEffect, useState } from "react";

import { useScrollLock } from "@/hooks";

import { Container, Divider, Langs, Logo } from "@/shared/ui";

import Burger from "./burger";
import Cart from "./cart";
import * as S from "./header.styled";
import { MobileNav } from "./mobile-nav";
import { Navigation } from "./navigation";
import { Search } from "./search";

export function Header() {
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
        <Container>
          <S.HeaderWrapper>
            <Logo />
            <Navigation />
            <S.SearchWrapper>
              <Search />
            </S.SearchWrapper>
            <Cart />
            <Langs />
            {/* <S.ButtonWrapper>
              <Button path="/login" startIcon={ICONS.login}>
                {t.btn.login}
              </Button>
            </S.ButtonWrapper> */}
            <Burger toggler={toggleMenu} active={menuIsOpen} />
          </S.HeaderWrapper>
          <Divider />
        </Container>
      </S.Header>
    </>
  );
}
