import styled from "styled-components";
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  height: 40px;
  cursor: pointer;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 700;
  color: #b3b3b3;
  &:hover {
    color: var(--select-hover-color);
  }
`;
