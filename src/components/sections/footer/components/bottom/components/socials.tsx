import { FC } from "react";

import { Typography } from "@components/ui";
import { ICONS } from "@constants";
import { useTranslation } from "@hooks";
import { TagVariant } from "@utils/enums/components";

import * as S from "./socials.styled";

export const Socials: FC = () => {
  const t = useTranslation();

  return (
    <div>
      <Typography tag="h2" variant={TagVariant.h4}>
        {t.footer.social as string}
      </Typography>
      <S.List>
        {Object.entries(t.socials).map(([key, network]) => (
          <li key={key}>
            <S.Link target="_blank" rel="noreferrer" href={network.link} aria-label={t.alts[key]}>
              {ICONS[key]}
            </S.Link>
          </li>
        ))}
      </S.List>
    </div>
  );
};
