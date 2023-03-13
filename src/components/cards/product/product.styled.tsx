import styled from "styled-components";

export const Controls = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #dee9da;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -50%);
  transition: opacity var(--transition), visibility var(--transition);
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 25rem;

  &::before {
    content: "";
    position: absolute;
    background-color: rgba(226, 231, 225, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition), visibility var(--transition);
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
        opacity: 1;
        visibility: visible;
        transition: opacity var(--transition), visibility var(--transition);
      }
    }
  }
`;

export const Name = styled.h3`
  margin-top: 1rem;
  font-weight: 400;
`;

export const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 90%;
  color: var(--clr-accent);
`;

export const OldPrice = styled.p`
  font-size: 1.8rem;
  line-height: 90%;
  text-decoration: line-through;

  color: #a5a5a5;
`;

export const Sale = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  padding: 0.8rem;
  font-weight: 500;
  color: var(--clr-light);
  background-color: var(--clr-accent);
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
    fill: var(--clr-dark);
    transition: fill var(--transition), stroke var(--transition);
  }

  @media (hover) {
    &:hover {
      &:nth-child(2) {
        svg {
          stroke: var(--clr-accent);
        }
      }

      svg {
        fill: var(--clr-accent);
        transition: fill var(--transition), stroke var(--transition);
      }
    }
  }
`;

export const Quantity = styled.span<{ shown: boolean }>`
  position: absolute;
  right: -1.3rem;
  top: -0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--clr-light);
  background-color: var(--clr-accent);
  opacity: ${(props) => (props.shown ? 1 : 0)};
  visibility: ${(props) => (props.shown ? "visible" : "hidden")};
`;
