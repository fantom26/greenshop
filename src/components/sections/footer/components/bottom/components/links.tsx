import { useTranslation } from "next-i18next";

import { Typography } from "@components/ui";
import { TagVariant } from "@utils/enums/components";

import * as S from "./links.styled";

export const Links = () => {
  const { t } = useTranslation();

  const links = t("footerLinks", { returnObjects: true }) as Array<{ title: string; list: { label: string; link: string }[] }>;

  return (
    <S.Groups>
      {links.map(({ title, list }) => (
        <li key={title}>
          <>
            <Typography tag="h2" variant={TagVariant.h4}>
              {title}
            </Typography>
            <S.Links>
              {list.map(({ label, link }) => (
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
