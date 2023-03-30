import Link from "next/link";

import styled from "styled-components";

export const Header = styled.li`
  padding-block: 1rem;
  text-align: left;
  font-weight: 500;
  color: var(--clr-dark);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const Products = styled.div`
  width: 100%;
  max-width: 78.2rem;

  ${Header}, ${Wrapper} {
    width: 100%;
  }

  ${Header}:first-child,
  ${Wrapper}:first-child {
    max-width: 32rem;
  }

  ${Header}:nth-child(2),
  ${Wrapper}:nth-child(2) {
    max-width: 24.2rem;
  }

  ${Header}:last-child,
  ${Wrapper}:last-child {
    max-width: 16rem;
  }

  ${Wrapper}:not(:first-child) {
    justify-content: space-between;
  }
`;

export const Headers = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-bottom: 1rem;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background-color: rgba(70, 163, 88, 0.5);
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 6rem;
  width: 100%;
`;

export const List = styled.ul`
  ${Item} + ${Item} {
    margin-top: 1rem;
  }
`;

export const Poster = styled(Link)`
  display: flex;
  max-width: 7rem;
`;

export const SKU = styled.p`
  margin-top: 0.6rem;
  font-size: 1.4rem;
  color: #a5a5a5;
  span {
    color: var(--clr-grey);
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Control = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--clr-light);
  background-color: var(--clr-accent);

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export const Price = styled.p`
  font-weight: 500;
  color: var(--clr-grey);
`;

export const Count = styled.p`
  font-size: 1.7rem;
  line-height: 60%;
`;

export const Name = styled(Link)`
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--clr-dark);
  word-wrap: break-all;
`;

export const Delete = styled.button`
  display: flex;
  cursor: pointer;

  svg {
    path {
      stroke: var(--clr-grey);
      transition: stroke var(--transition);
    }

    @media (hover) {
      &:hover {
        path {
          stroke: var(--clr-dark);
          transition: stroke var(--transition);
        }
      }
    }
  }
`;
