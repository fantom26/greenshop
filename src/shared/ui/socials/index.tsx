import { $SpecialObject } from "i18next/typescript/helpers";

import { ICONS } from "@/shared/svgs";
import * as S from "@/shared/ui/socials/socials.styled";

export function Socials({ socials }: { socials: $SpecialObject }) {
  return (
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
  );
}
