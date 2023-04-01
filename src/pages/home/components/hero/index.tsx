import Image from "next/image";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button, Container, Typography } from "@components/ui";
import { NEXT_PUBLIC_APP_URL } from "@constants";
import { IFile } from "@declarations";
import { useTranslation } from "@hooks";
import { ColorVariant, TagVariant } from "@utils/enums/components";

import * as S from "./hero.styled";

export const Hero = () => {
  const t = useTranslation();

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
            {t.pages.home.hero.map(({ supTitle, title, description, poster }, index) => (
              <SwiperSlide key={index} tag="li">
                <S.Slide>
                  <S.Info>
                    <S.Suptitle>{supTitle as string}</S.Suptitle>
                    <S.Title tag="h1" variant={TagVariant.h1} dangerouslySetInnerHTML={{ __html: title as string }} uppercase />
                    <Typography tag="p" variant={TagVariant.paragraph1} color={ColorVariant.grey}>
                      {description as string}
                    </Typography>
                    <S.ButtonWrapper>
                      <Button uppercase>{t.btn.shopNow}</Button>
                    </S.ButtonWrapper>
                  </S.Info>
                  <S.ImageWrapper>
                    <Image src={`${NEXT_PUBLIC_APP_URL}${(poster as IFile).url}`} width="518" height="518" alt={(poster as IFile).meta.alt} />
                  </S.ImageWrapper>
                </S.Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.HeroWrapper>
      </Container>
    </S.Hero>
  );
};
