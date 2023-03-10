import styled from "styled-components";

export const Pagination = styled.div``;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button<{ actived?: boolean; withDots?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 0.1rem solid #e5e5e5;
  border-radius: 0.4rem;
  width: 3.5rem;
  height: 3.5rem;
  transition: font-weight var(--transition), color var(--transition), background-color var(--transition);

  ${({ actived }) =>
    actived &&
    `
    color: var(--clr-light);
    background-color: var(--clr-accent);
    font-weight: 700;
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
