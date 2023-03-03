import { FC, ReactNode, useState } from "react";

import { Drawer } from "@components/common";
import { Logo } from "@components/ui";

import { useScrollLock } from "@hooks";
import * as S from "./header.styled";
import { Navigation } from "./components/navigation";
import { Search } from "./components/search";

export const Header: FC = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = (state: boolean) => {
    setDrawerIsOpen(state);
  };

  return (
    <>
      {/* <Drawer visible={drawerIsOpen}>
        <Logo />
      </Drawer> */}
      <S.Header>
        <S.HeaderContainer>
          <S.HeaderWrapper>
            <Logo />
            <Navigation />
            <Search />
            {/* <Cart /> */}
          </S.HeaderWrapper>
        </S.HeaderContainer>
      </S.Header>
    </>
  );
};
