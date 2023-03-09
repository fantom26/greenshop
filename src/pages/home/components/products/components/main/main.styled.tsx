import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  max-width: 84rem;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const Content = styled.div`
  position: relative;
  padding-top: 2.5rem;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    width: 26rem;
    height: 0.1rem;
    background-color: var(--clr-accent);
    transform: translateX(-50%);
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
`;
