import { Container } from "@components/ui";

import { Bottom } from "./components/bottom";
import { Contacts } from "./components/contacts";
import { Top } from "./components/top/index";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Top />
        <Contacts />
        <Bottom />
      </Container>
    </footer>
  );
};
