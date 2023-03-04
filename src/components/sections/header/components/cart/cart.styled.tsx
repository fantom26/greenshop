import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 576px) {
    margin-left: auto;
  }
`;

export const Quantity = styled.span<{ shown: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  border: 0.2rem solid var(--clr-light);
  border-radius: 50%;
  font-weight: 500;
  font-size: 1rem;
  line-height: 130%;
  color: var(--clr-light);
  opacity: ${(props) => (props.shown ? 1 : 0)};
  visibility: ${(props) => (props.shown ? "visible" : "hidden")};
`;
