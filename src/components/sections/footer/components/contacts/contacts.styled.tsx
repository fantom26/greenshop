import styled from "styled-components";

export const Contacts = styled.div`
  position: relative;
  display: flex;
  gap: 6rem;
  align-items: center;
  padding: 3rem 2.5rem;
  background-color: rgb(70 163 88 / 10%);

  &::after,
  &::before {
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: var(--clr-accent);
    content: "";
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  @media (max-width: 992px) {
    gap: 2rem;
    justify-content: space-between;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 810px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 6rem;
  align-items: center;

  @media (max-width: 992px) {
    gap: 2rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: 19.5rem;
`;

export const Icon = styled.div`
  display: flex;
  max-width: 1.8rem;
`;
