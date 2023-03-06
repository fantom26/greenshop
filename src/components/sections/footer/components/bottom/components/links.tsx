import Link from "next/link";

import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { TagVariant } from "@utils/enums/components";

import * as S from "./links.styled";

export const Links = () => {
  const t = useTranslation();
  return (
    <S.Groups>
      {t.footerLinks.map(({ title, list }) => (
        <li key={title as string}>
          <>
            <Typography tag="h2" variant={TagVariant.h4}>
              {title as string}
            </Typography>
            <S.Links>
              {(list as Record<string, string>[]).map(({ label, link }) => (
                <li key={label}>
                  <S.NextLink href={link}>{label}</S.NextLink>
                </li>
              ))}
            </S.Links>
          </>
        </li>
      ))}
    </S.Groups>
  );
};
