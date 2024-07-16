import styled from "styled-components";

export const Pagination = styled.div``;

export const List = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Button = styled.button<{ actived?: boolean; withDots?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid #e5e5e5;
  border-radius: 0.4rem;
  padding: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  transition: font-weight var(--transition), color var(--transition), background-color var(--transition);

  ${({ actived }) =>
    actived &&
    `
    color: var(--clr-light);
    background-color: var(--clr-accent-400);
    font-weight: var(--font-weight-bold);
    transition: font-weight var(--transition), color var(--transition), background-color var(--transition);
  `};

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${({ withDots }) => withDots && "pointer-events: none;"}
`;
