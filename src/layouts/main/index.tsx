import { FC, ReactNode } from "react";

import { Footer, Header } from "@components/sections";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
