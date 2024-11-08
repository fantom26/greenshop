import { Copyright, Divider, Langs } from "@/shared/ui";

import * as S from "./bottom.styled";
import { Links } from "./components/links";
import { Socials } from "./components/socials";

export function Bottom() {
  return (
    <S.Bottom>
      <S.BottomWrapper>
        <Links />
        <Socials />
        <Langs />
      </S.BottomWrapper>
      <Divider />
      <Copyright />
    </S.Bottom>
  );
}
