import { useTranslation } from "next-i18next";

import { Copyright, Divider, Langs, Typography } from "@/shared/ui";
import { Socials } from "@/shared/ui/socials";

import * as S from "./bottom.styled";
import { Links } from "./components/links";

// TODO socials networks have to be edited via admin panel not via translations json
export function Bottom() {
  const { t } = useTranslation(["footer", "common"]);
  const socials = t("common:socials", { returnObjects: true });

  return (
    <S.Bottom>
      <S.BottomWrapper>
        <Links />
        <div>
          <Typography tag="h2" variant="h4">
            {t("social")}
          </Typography>
          <Socials socials={socials} />
        </div>
        <Langs />
      </S.BottomWrapper>
      <Divider />
      <Copyright />
    </S.Bottom>
  );
}
