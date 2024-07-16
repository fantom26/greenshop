import styled from "styled-components";

export const Copyright = styled.div`
  position: relative;
  margin-top: 3rem;
  padding-top: 1.5rem;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: var(--clr-accent-400);
    content: "";
  }
`;
