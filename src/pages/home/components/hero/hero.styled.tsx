import styled from "styled-components";

import { Typography } from "@components/ui/typography/typography.styled";

export const Hero = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const HeroWrapper = styled.div`
  background-image: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
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
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 115%;

  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Title = styled(Typography)`
  margin-bottom: 0.5rem;

  span {
    color: var(--clr-accent);
  }
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
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
  margin-top: 4.5rem;
  max-width: 14rem;

  @media (max-width: 992px) {
    margin-top: 1.5rem;
  }
`;
