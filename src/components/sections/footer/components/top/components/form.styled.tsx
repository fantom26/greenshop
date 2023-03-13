import styled from "styled-components";

import { Button as StyledButton } from "@components/ui/button/button.styled";

export const FormWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled(StyledButton)`
  border-radius: 0 0.6rem 0.6rem 0;
  max-width: 8.5rem;
`;
