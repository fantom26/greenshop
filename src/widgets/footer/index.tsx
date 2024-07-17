import { Container } from "@/shared/ui";

import { Bottom } from "./ui/bottom";
import { Contacts } from "./ui/contacts";
import { Top } from "./ui/top";

export const Footer = () => (
  <footer>
    <Container>
      <Top />
      <Contacts />
      <Bottom />
    </Container>
  </footer>
);
