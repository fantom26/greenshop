import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    padding-left: 1.5rem;
  }
`;

// TODO hover like links in footer Duplicated
export const Item = styled.li<{ selected: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  box-shadow: inset 0 0 0 0 var(--clr-accent);
  transition: color var(--transition) ease-in-out, box-shadow var(--transition) ease-in-out;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    box-shadow: inset 800px 0 0 0 var(--clr-accent);
    color: var(--clr-light);
  `}
  @media (hover) {
    &:hover {
      box-shadow: inset 800px 0 0 0 var(--clr-accent);
      color: var(--clr-light);
      transition: color var(--transition) ease-in-out, box-shadow var(--transition) ease-in-out;
    }
  }
`;
