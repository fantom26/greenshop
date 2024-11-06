import { useTranslation } from "next-i18next";
import Image, { ImageProps } from "next/image";

interface ICustomImageProps extends Omit<ImageProps, "alt"> {
  alt: string | undefined;
}

export function CustomImage({ alt, ...rest }: ICustomImageProps) {
  const { t } = useTranslation("common");
  const defaultImageAlt = alt ?? t("defaultAlt");

  return <Image alt={defaultImageAlt} {...rest} />;
}
