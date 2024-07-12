import * as S from "./bottom.styled";
import { Copyright } from "./components/copyright";
import { Links } from "./components/links";
import { Socials } from "./components/socials";

export const Bottom = () => (
  <S.Bottom>
    <S.BottomWrapper>
      <Links />
      <Socials />
    </S.BottomWrapper>
    <Copyright />
  </S.Bottom>
);
