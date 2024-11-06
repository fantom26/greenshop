import { FC } from "react";

import { useTranslation } from "next-i18next";

import { ICONS } from "@/shared/svgs";
import { Typography } from "@/shared/ui";

import * as S from "./socials.styled";

export const Socials: FC = () => {
  const { t } = useTranslation(["footer", "common"]);
  const socials = t("common:socials", { returnObjects: true });

  return (
    <div>
      <Typography tag="h2" variant="h4">
        {t("social")}
      </Typography>
      <S.List>
        {Object.entries(socials).map(([key, network]) => (
          <S.Link
            key={key}
            target="_blank"
            rel="noreferrer"
            href={network.link}
            aria-label={network.alts}
          >
            {ICONS[key]}
          </S.Link>
        ))}
      </S.List>
    </div>
  );
};
