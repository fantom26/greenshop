import styled from "styled-components";

export const Copyright = styled.div`
  position: relative;
  margin-top: 3rem;
  padding-top: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    background-color: var(--clr-accent);
  }
`;
