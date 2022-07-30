import styled from "styled-components";
import { TbMicrophone2 } from "react-icons/tb";
import {
  IconVolumeMax,
  IconVolumeMin,
  IconVolumeMute,
  IconQueue,
  IconDevices,
} from "../Common/Icons";
import { ProgressBar } from "./ProgressBar";
import { StyledButton } from "../Common/StyledButton";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-width: 180px;
  width: 30%;
  align-items: center;
  > * {
    color: var(--inactive-color);
    cursor: pointer;
    &:hover {
      color: var(--select-hover-color);
    }
  }
`;

const VolumeBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 125px;
`;

export function SideController(props) {
  return (
    <StyledDiv>
      <TbMicrophone2 />
      <IconQueue />
      <IconDevices />
      {/* <IconVolumeMin />
      <IconVolumeMute /> */}
      <VolumeBar>
        <StyledButton onClick={props.onMute}>
          {props.volume === 0 ? (
            <IconVolumeMute />
          ) : props.volume <= 0.5 ? (
            <IconVolumeMin />
          ) : (
            <IconVolumeMax />
          )}
        </StyledButton>
        <ProgressBar
          type={"range"}
          step="0.1"
          min="0"
          value={props.volume}
          max="1"
          onChange={(e) => props.onVolumeChange(e.target.value)}
        />
      </VolumeBar>
    </StyledDiv>
  );
}
