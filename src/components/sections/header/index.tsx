import { FC, ReactNode, useState } from "react";

import { Drawer } from "@components/common";
import { Logo } from "@components/ui";

import { useScrollLock } from "@hooks";
import * as S from "./header.styled";

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
          <Logo />
        </S.HeaderContainer>
      </S.Header>
    </>
  );
};
