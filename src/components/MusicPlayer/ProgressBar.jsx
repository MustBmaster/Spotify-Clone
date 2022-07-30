import styled from "styled-components";
export const ProgressBar = styled.input`
  height: 5px;
  appearance: none;
  width: 100%;
  margin: 2px;
  border-radius: 8px;
  transition: 0.2s ease;
  background-color: var(--inactive-color);
  &::-webkit-progress-value {
    background-color: red;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* display: none; */
    width: 10px;
    height: 10px;
    border-radius: 8px;
    background-color: var(--theme-color);
  }
  &:hover {
    background: var(--theme-color);
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 10px;
      height: 10px;
      border-radius: 8px;
      background-color: var(--select-hover-color);
    }
  }
`;
