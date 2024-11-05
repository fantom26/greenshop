import { Typography } from "@/shared/ui/typography/typography.styled";
import styled from "styled-components";

export const Hero = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const HeroWrapper = styled.div`
  background-image: linear-gradient(97.77deg, rgb(245 245 245 / 50%) -23.46%, rgb(245 245 245 / 50%) 107.51%);
`;

export const Info = styled.div`
  width: 100%;
  max-width: 58rem;

  @media (max-width: 992px) {
    max-width: initial;
  }
`;

export const Suptitle = styled.p`
  margin-bottom: 1rem;
  font-weight: var(--font-weight-medium);
  font-size: 1.4rem;
  line-height: 115%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Title = styled(Typography)`
  margin-bottom: 0.5rem;

  span {
    color: var(--clr-accent-400);
  }
`;

export const Slide = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  padding-left: 4rem;

  @media (max-width: 1200px) {
    padding-left: initial;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  max-width: 51.8rem;
`;

export const ButtonWrapper = styled.div`
  max-width: 14rem;
  margin-top: 4.5rem;

  @media (max-width: 992px) {
    margin-top: 1.5rem;
  }
`;
