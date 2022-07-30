import styled from "styled-components";
export const StyledButton = styled.button`
  border: none;
  align-items: center;
  background: transparent;
  justify-content: center;
  height: 32px;
  width: 32px;
  margin: 0;
  padding: 0;
  color: var(--inactive-color);
  > * {
    &:hover {
      color: var(--select-hover-color);
    }
  }
`;
