import { FC } from "react";

import { useTranslation } from "next-i18next";
import Image, { ImageProps } from "next/image";

interface ICustomImageProps extends Omit<ImageProps, "alt"> {
  alt: string | undefined;
}

export const CustomImage: FC<ICustomImageProps> = ({ alt, ...props }) => {
  const { t } = useTranslation("common");
  const defaultImageAlt = alt ?? t("defaultAlt");

  return <Image alt={defaultImageAlt} {...props} />;
};
