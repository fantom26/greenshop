import { FC, ReactNode, useEffect, useState } from "react";

import { createPortal } from "react-dom";

interface DrawerProps {
  visible: boolean;
  children: ReactNode;
  className?: string;
}

export const Drawer: FC<DrawerProps> = (props) => {
  // **Props
  const { visible, children, className } = props;

  // **Local state
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return createPortal(
    <div className={visible ? "drawer open" : "drawer"}>
      <div
        className={className ? `drawer-content ${className}` : "drawer-content"}
      >
        {children}
      </div>
    </div>,
    document?.body
  );
};
