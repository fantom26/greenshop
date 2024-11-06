import styled from "styled-components";


export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #dee9da;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity var(--transition), visibility var(--transition);
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 25rem;

  &::before {
    position: absolute;
    background-color: rgb(226 231 225 / 50%);
    visibility: hidden;
    opacity: 0;
    transition: opacity var(--transition), visibility var(--transition);
    content: "";
    inset: 0;
  }

  @media (max-width: 992px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Product = styled.li`
  position: relative;

  @media (hover) {
    &:hover {
      ${Controls}, ${ImageWrapper}::before {
        visibility: visible;
        opacity: 1;
        transition: opacity var(--transition), visibility var(--transition);
      }
    }
  }
`;

export const Name = styled.h3`
  margin-top: 1rem;
  font-weight: var(--font-weight-regular);
`;

export const Prices = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Price = styled.p`
  color: var(--clr-accent-400);
  font-weight: var(--font-weight-bold);
  font-size: 1.8rem;
  line-height: 90%;
`;

export const OldPrice = styled.p`
  color: #a5a5a5;
  font-size: 1.8rem;
  line-height: 90%;
  text-decoration: line-through;
`;

export const Sale = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 0.8rem;
  color: var(--clr-light);
  font-weight: var(--font-weight-medium);
  background-color: var(--clr-accent-400);
`;

export const Control = styled.button`
  position: relative;
  display: flex;
  max-width: 2.5rem;

  &:nth-child(2) {
    svg {
      stroke: var(--clr-dark);
    }
  }

  svg {
    transition: fill var(--transition), stroke var(--transition);
    fill: var(--clr-dark);
  }

  @media (hover) {
    &:hover {
      &:nth-child(2) {
        svg {
          stroke: var(--clr-accent-400);
        }
      }

      svg {
        transition: fill var(--transition), stroke var(--transition);
        fill: var(--clr-accent-400);
      }
    }
  }
`;

export const Quantity = styled.span<{ shown: boolean }>`
  position: absolute;
  top: -0.4rem;
  right: -1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  color: var(--clr-light);
  font-weight: var(--font-weight-medium);
  font-size: 1rem;
  background-color: var(--clr-accent-400);
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  opacity: ${({shown}) => (shown ? 1 : 0)};
`;
