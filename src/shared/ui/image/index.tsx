import { useTranslation } from "next-i18next";
import Image, { ImageProps } from "next/image";

interface ICustomImageProps extends Omit<ImageProps, "alt"> {
  alt: string | undefined;
}

export function CustomImage({ src, alt, ...rest }: ICustomImageProps) {
  const { t } = useTranslation("common");
  const defaultImageAlt = alt ?? t("defaultAlt");

  return <Image src={`${process.env.NEXT_PUBLIC_APP_URL}/${src}`} alt={defaultImageAlt} {...rest} />;
}
