import Link from "next/link";

import { Logo, Typography } from "@components/ui";
import { ICONS } from "@constants";
import { useTranslation } from "@hooks";
import { TagVariant } from "@utils/enums/components";

import * as S from "./contacts.styled";

export const Contacts = () => {
  const t = useTranslation();

  return (
    <S.Contacts>
      <Logo />
      <S.List>
        <S.Item>
          <S.Icon>{ICONS.site}</S.Icon>
          <Link href="https://www.google.com/maps/search/?api=1&query=70+West+Buckingham+Ave.">
            <Typography variant={TagVariant.paragraph1}>{t.contacts.site}</Typography>
          </Link>
        </S.Item>
        <S.Item>
          <S.Icon>{ICONS.email}</S.Icon>
          <Link href={`malto:${t.contacts.email}`}>
            <Typography tag="span" variant={TagVariant.paragraph1}>
              {t.contacts.email}
            </Typography>
          </Link>
        </S.Item>
        <S.Item>
          <S.Icon>{ICONS.phone}</S.Icon>
          <Link href={`tel:${t.contacts.phone}`}>
            <Typography tag="span" variant={TagVariant.paragraph1}>
              {t.contacts.phone}
            </Typography>
          </Link>
        </S.Item>
      </S.List>
    </S.Contacts>
  );
};
