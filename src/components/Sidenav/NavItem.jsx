import styled from "styled-components";
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  gap: 16px;
  height: 40px;
  padding: 0 24px;
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    color: var(--select-hover-color);
  }
`;
