import styled from "styled-components";

export const FilterParams = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const FilterParamButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    width: 1.2rem;
    height: 0.1rem;
    background-color: var(--clr-light);
    transform: translateY(-50%);
  }

  &::before {
    transform: rotate(45deg) translateY(-50%);
  }

  &::after {
    transform: rotate(-45deg) translateY(-50%);
  }
`;

export const FilterParam = styled.li<{ reset?: boolean }>`
  position: relative;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  font-weight: 500;
  color: ${({ reset }) => (reset ? "var(--clr-accent)" : "var(--clr-light)")};
  background-color: ${({ reset }) => (reset ? "var(--clr-light)" : " var(--clr-accent)")};

  ${({ reset }) =>
    reset &&
    `
    border: 0.1rem solid var(--clr-accent);

    ${FilterParamButton} {
      &::before,
      &::after {
        background-color: var(--clr-accent);
      }
    }
  `}
`;
