import styled from "styled-components";

export const WrapperBtn = styled.div`
  width: 100%;
  max-width: 4rem;

  path {
    fill: var(--clr-accent-400);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapperMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 4rem 1.5rem;
  overflow-y: auto;
  background-color: var(--clr-light);
  box-shadow: var(--shadow);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 3rem;
    height: 0.2rem;
    background-color: var(--clr-accent-400);
    transform: translateY(-50%);
    content: "";
  }

  &::before {
    transform: rotate(45deg) translateY(-50%);
  }

  &::after {
    transform: rotate(-45deg) translateY(-50%);
  }
`;
