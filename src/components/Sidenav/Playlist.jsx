import styled from "styled-components";
export const Playlist = styled.div`
  display: flex;
  overscroll-behavior-y: contain;
  height: 100%;
  flex-grow: 1;
  max-height: 450px;
  li {
    cursor: pointer;
    padding: 0 24px;
    height: 32px;
    font-size: 0.875rem;
    align-items: center;
    font-weight: 400;
    color: #b3b3b3;
    &:hover {
      color: var(--select-hover-color);
    }
  }
`;
// export function Playlist() {
//   return <StyledDiv />;
// }
