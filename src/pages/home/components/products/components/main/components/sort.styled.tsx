import styled from "styled-components";

export const Current = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span:last-child {
    display: flex;
    transform: rotate(0);
    transition: transform var(--transition);
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 2;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--clr-light);
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition), visibility var(--transition);
`;

export const Sort = styled.div`
  display: flex;
  align-items: 1rem;
  gap: 0.5rem;
`;

export const Item = styled.li`
  transition: color var(--transition);

  @media (hover) {
    &:hover {
      color: var(--clr-accent);
      transition: color var(--transition);
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:focus ${Dropdown}, &:hover ${Dropdown} {
    opacity: 1;
    visibility: visible;
    transition: opacity var(--transition), visibility var(--transition);
  }

  &:focus ${Current}, &:hover ${Current} {
    span:last-child {
      transform: rotate(-180deg);
      transition: transform var(--transition);
    }
  }
`;
