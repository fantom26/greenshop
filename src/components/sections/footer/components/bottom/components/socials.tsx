import { FC } from "react";

import { ICONS } from "@/utils/constants";
import { useTranslation } from "next-i18next";

import { Typography } from "@components/ui";

import * as S from "./socials.styled";

export const Socials: FC = () => {
  const { t } = useTranslation();
  const socials = t("socials", { returnObjects: true });
  return (
    <div>
      <Typography tag="h2" variant="h4">
        {t("footer.social")}
      </Typography>
      <S.List>
        {Object.entries(socials).map(([key, network]) => (
          <li key={key}>
            <S.Link target="_blank" rel="noreferrer" href={network.link} aria-label={t(`alts.${key}`)}>
              {ICONS[key]}
            </S.Link>
          </li>
        ))}
      </S.List>
    </div>
  );
};
