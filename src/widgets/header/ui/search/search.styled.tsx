import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 25rem;

  @media (max-width: 992px) {
    margin-left: auto;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const Icon = styled.div`
  display: flex;

  svg {
    fill: var(--clr-dark);
  }
`;

export const Option = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const OptionName = styled.div`
    flex-grow: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
