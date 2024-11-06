import { useInterestedInQuery } from "@/store/api";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, ProductCard, Typography } from "@/shared/ui";

import * as S from "./interested-in.styled";

const breakpoints = {
  375: {
    spaceBetween: 15,
    slidesPerView: 1.25
  },
  420: {
    spaceBetween: 15,
    slidesPerView: 1.5
  },
  576: {
    spaceBetween: 20,
    slidesPerView: 2.5
  },
  767: {
    spaceBetween: 20,
    slidesPerView: 3.5
  },
  992: {
    spaceBetween: 30,
    slidesPerView: 4.25
  },
  1200: {
    spaceBetween: 30,
    slidesPerView: 5
  }
};

function InterestedIn({ title }: { title: string }) {
  const { data: products } = useInterestedInQuery();

  return (
    <S.Section>
      <Container>
        <S.Top>
          <Typography color="green" variant="h4" tag="h2">
            {title}
          </Typography>
        </S.Top>
        <Swiper
          modules={[Pagination]}
          pagination={{
            type: "bullets",
            clickable: true
          }}
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={breakpoints}
        >
          {products?.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </S.Section>
  );
}

export default InterestedIn;
