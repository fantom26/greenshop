import { Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { TagVariant } from "@utils/enums/components";

import * as S from "./copyright.styled";

export const Copyright = () => {
  const t = useTranslation();

  return (
    <S.Copyright>
      <Typography tag="p" variant={TagVariant.paragraph1} center>
        {t.footer.copyright as string}
      </Typography>
    </S.Copyright>
  );
};
