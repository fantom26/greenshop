import { ReactNode } from "react";

import styled from "styled-components";

export const Wrapper = styled.div<{ error: boolean }>`
  position: relative;
`;

export const InputWrapper = styled.div<{ widthBtn: ReactNode }>`
  min-height: 4rem;

  ${({ widthBtn }) =>
    widthBtn &&
    `
    display: flex;
    align-items: center;
  `}
`;

export const Input = styled.input<{ borderRadius: string }>`
  display: flex;
  align-items: center;
  border: 0.1rem solid #eaeaea;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0.3rem")};
  padding-right: 1.6rem;
  padding-left: 1.6rem;
  width: 100%;
  min-height: 4rem;
  color: var(--clr-black);
  background-color: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 1.4rem;
    line-height: 115%;
    color: #acacac;
  }
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  line-height: 100%;
`;

export const InputTextHelper = styled.span<{ error: boolean }>`
  display: block;
  margin-top: 0.4rem;
  font-size: 1.2rem;
  transform: translateX(1.7rem);

  color: ${({ error }) => (error ? "var(--clr-ui-error)" : "var(--clr-grey)")};
`;
