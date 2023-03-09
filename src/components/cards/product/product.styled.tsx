import styled from "styled-components";

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background-color: #dee9da;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition), visibility var(--transition);
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 25rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(226, 231, 225, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition), visibility var(--transition);
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
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Price = styled.p`
  color: var(--clr-accent);
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 90%;
`;

export const OldPrice = styled.p`
  font-size: 1.8rem;
  line-height: 90%;
  text-decoration: line-through;

  color: #a5a5a5;
`;

export const Sale = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.8rem;
  z-index: 2;
  font-weight: 500;
  color: var(--clr-light);
  background-color: var(--clr-accent);
`;

export const Control = styled.button`
  position: relative;
  display: flex;
  max-width: 2.5rem;

  svg {
    fill: var(--clr-dark);
    transition: fill var(--transition);
  }

  @media (hover) {
    &:hover {
      svg {
        fill: var(--clr-accent);
        transition: fill var(--transition);
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
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  font-weight: 500;
  font-size: 1rem;
  color: var(--clr-light);
  background-color: var(--clr-accent);
  opacity: ${(props) => (props.shown ? 1 : 0)};
  visibility: ${(props) => (props.shown ? "visible" : "hidden")};
`;
