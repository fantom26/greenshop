import styled from "styled-components";

export const Contacts = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6rem;
  padding: 3rem 2.5rem;
  background-color: rgba(70, 163, 88, 0.1);

  @media (max-width: 992px) {
    justify-content: space-between;
    gap: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 810px) {
    flex-direction: column;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: var(--clr-accent);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 6rem;

  @media (max-width: 992px) {
    gap: 2rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 19.5rem;
`;

export const Icon = styled.div`
  display: flex;
  max-width: 1.8rem;
`;
