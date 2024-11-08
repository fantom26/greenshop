import { ReactNode } from "react";

import { Container, Copyright, Divider, Logo } from "@/shared/ui";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <Container>
          <Logo />
          <Divider />
        </Container>
      </header>
      <main>{children}</main>
      <footer>
        <Container>
          <Divider />
          <Copyright />
        </Container>
      </footer>
    </>
  );
}

export default AuthLayout;
