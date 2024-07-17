import Link from "next/link";
import styled from "styled-components";

export const Header = styled.li`
  color: var(--clr-dark);
  font-weight: var(--font-weight-medium);
  line-height: 100%;
  text-align: left;
  padding-block: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Headers = styled.ul`
  position: relative;
  margin-bottom: 1rem;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: rgb(70 163 88 / 50%);
    content: "";
  }
`;

export const Item = styled.li`
  width: 100%;
`;

export const Products = styled.div`
  width: 100%;
  max-width: 78.2rem;

  ${Header}, ${Wrapper} {
    width: 100%;
  }

  ${Header}:first-child,
  ${Wrapper}:first-child {
    min-width: 22rem;
    max-width: 32rem;
  }

  ${Header}:nth-child(2),
  ${Wrapper}:nth-child(2) {
    min-width: 14rem;
    max-width: 24.2rem;
  }

  ${Header}:last-child,
  ${Wrapper}:last-child {
    max-width: 16rem;
  }

  ${Wrapper}:not(:first-child) {
    justify-content: space-between;
  }

  ${Headers}, ${Item} {
    display: flex;
    gap: 6rem;
    align-items: center;

    @media (max-width: 767px) {
      gap: 3rem;
    }

    @media (max-width: 576px) {
      min-width: 50rem;
    }
  }

  @media (max-width: 992px) {
    max-width: initial;
  }

  @media (max-width: 576px) {
    overflow-x: auto;
  }
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
  color: #a5a5a5;
  font-size: 1.4rem;

  span {
    color: var(--clr-grey);
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
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
  color: var(--clr-grey);
  font-weight: var(--font-weight-medium);
`;

export const Count = styled.p`
  font-size: 1.7rem;
  line-height: 60%;
`;

export const Name = styled(Link)`
  color: var(--clr-dark);
  font-weight: var(--font-weight-medium);
  font-size: 1.6rem;
  word-wrap: break-all;
`;

export const Delete = styled.button`
  display: flex;
  cursor: pointer;

  svg {
    path {
      transition: stroke var(--transition);
      stroke: var(--clr-grey);
    }

    @media (hover) {
      &:hover {
        path {
          transition: stroke var(--transition);
          stroke: var(--clr-dark);
        }
      }
    }
  }
`;
