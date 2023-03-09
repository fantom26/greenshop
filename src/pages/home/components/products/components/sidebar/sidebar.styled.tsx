import styled from "styled-components";

export const Sidebar = styled.aside`
  padding: 1.5rem 2rem;
  max-width: 31rem;
  background-color: #fbfbfb;
`;

export const FilterParams = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const FilterParam = styled.li`
  position: relative;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  font-weight: 500;
  color: var(--clr-light);
  background-color: var(--clr-accent);
`;

export const FilterParamButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    top: 50%;
    left: 0;
    width: 1.2rem;
    height: 0.1rem;
    transform: translateY(-50%);
    background-color: var(--clr-light);
  }

  &::before {
    transform: rotate(45deg) translateY(-50%);
  }

  &::after {
    transform: rotate(-45deg) translateY(-50%);
  }
`;
