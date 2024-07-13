import styled from "styled-components";

export const Current = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  span:last-child {
    display: flex;
    transform: rotate(0);
    transition: transform var(--transition);
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  background-color: var(--clr-light);
  visibility: hidden;
  opacity: 0;
  transition: opacity var(--transition), visibility var(--transition);
`;

export const Sort = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Item = styled.li`
  transition: color var(--transition);

  @media (hover) {
    &:hover {
      color: var(--clr-accent-400);
      transition: color var(--transition);
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:focus ${Dropdown}, &:hover ${Dropdown} {
    visibility: visible;
    opacity: 1;
    transition: opacity var(--transition), visibility var(--transition);
  }

  &:focus ${Current}, &:hover ${Current} {
    span:last-child {
      transform: rotate(-180deg);
      transition: transform var(--transition);
    }
  }
`;
