import { IFile } from "@/utils/declarations";
import { useTranslation } from "next-i18next";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button, Container, CustomImage, Typography } from "@/shared/ui";

import * as S from "./hero.styled";

interface ISlide {
  supTitle: string;
  title: string;
  description: string;
  poster: IFile;
}

export function Hero() {
  const { t } = useTranslation("home");

  const slides = (t("hero", { returnObjects: true }) as Array<ISlide>) || [];

  return (
    <S.Hero>
      <Container>
        <S.HeroWrapper>
          <Swiper
            modules={[Pagination]}
            pagination={{
              type: "bullets",
              clickable: true
            }}
            wrapperTag="ul"
            slidesPerView={1}
          >
            {slides.map(({ supTitle, title, description, poster }) => (
              <SwiperSlide key={title} tag="li">
                <S.Slide>
                  <S.Info>
                    <S.Suptitle>{supTitle}</S.Suptitle>
                    <S.Title
                      tag="h1"
                      variant="h1"
                      dangerouslySetInnerHTML={{ __html: title }}
                      uppercase
                    />
                    <Typography tag="p" variant="paragraph1" color="grey">
                      {description}
                    </Typography>
                    <S.ButtonWrapper>
                      <Button uppercase>{t("btn.shopNow")}</Button>
                    </S.ButtonWrapper>
                  </S.Info>
                  <S.ImageWrapper>
                    <CustomImage
                      src={poster.url}
                      width="518"
                      height="518"
                      alt={poster.meta.alt}
                    />
                  </S.ImageWrapper>
                </S.Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.HeroWrapper>
      </Container>
    </S.Hero>
  );
}
