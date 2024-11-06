import { ElementType, ReactNode, useEffect, useState } from "react";

import { createPortal } from "react-dom";

import * as S from "./drawer.styled";

interface DrawerProps {
  visible: boolean;
  tag: ElementType;
  children: ReactNode;
}

export function Drawer({ visible, tag: Tag, children }: DrawerProps) {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return createPortal(
    <S.Drawer visible={visible}>
      <S.Content>
        <Tag>{children}</Tag>
      </S.Content>
    </S.Drawer>,
    document?.body
  );
}
