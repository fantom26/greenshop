import { DropdownIndicatorProps, components } from "react-select";

import { ICONS } from "@/shared/svgs";
import * as S from "@/widgets/header/ui/search/search.styled";

export const DropdownIndicator = (props: DropdownIndicatorProps) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <S.Icon>{ICONS.search}</S.Icon>
    </components.DropdownIndicator>
  );
