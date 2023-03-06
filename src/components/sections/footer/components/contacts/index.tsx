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
        {Object.entries(t.contacts).map(([key, contact]) => (
          <S.Item key={key}>
            <S.Icon>{ICONS[key]}</S.Icon>
            <Typography variant={TagVariant.paragraph1}>{contact}</Typography>
          </S.Item>
        ))}
      </S.List>
    </S.Contacts>
  );
};
