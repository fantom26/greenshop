import styled from "styled-components";

export const WrapperBtn = styled.div`
  width: 100%;
  max-width: 4rem;
  path {
    fill: var(--clr-accent);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapperMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  overflow-y: auto;
  padding: 4rem 1.5rem;
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow);
  background-color: var(--clr-light);
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 2.5rem;
  width: 3rem;
  height: 3rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    width: 3rem;
    height: 0.2rem;
    background-color: var(--clr-accent);
    transform: translateY(-50%);
  }

  &::before {
    transform: rotate(45deg) translateY(-50%);
  }

  &::after {
    transform: rotate(-45deg) translateY(-50%);
  }
`;
