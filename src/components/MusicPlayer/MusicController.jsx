import styled from "styled-components";
import { Timer } from "./Timer";
import { ProgressBar } from "./ProgressBar";
import {
  IconPause,
  IconPlay,
  IconShuffle,
  IconNext,
  IconPrev,
  IconRepeat,
  IconRepeatActivate,
  IconShuffleActivate,
} from "../Common/Icons";
import { StyledButton } from "../Common/StyledButton";

const StyledDiv = styled.div`
  width: 40%;
  max-width: 722px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Controller = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 10px;
  margin-bottom: 8px;
  width: 100%;
  > * {
    color: var(--inactive-color);
    cursor: pointer;
    &:hover {
      color: var(--select-hover-color);
    }
  }
`;

const Playback = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

function timeFormat(value) {
  let newValue = Math.floor(value);
  let minute = Math.floor(newValue / 60);
  let rest_seconds = newValue % 60;
  return (
    minute.toString().padStart(2, "0") +
    ":" +
    rest_seconds.toString().padStart(2, "0")
  );
}

export function MusicController(props) {
  return (
    <StyledDiv>
      <Controller>
        <StyledButton onClick={props.onShuffle}>
          {props.isShuffle ? <IconShuffleActivate /> : <IconShuffle />}
        </StyledButton>
        <StyledButton onClick={props.onPrev}>
          <IconPrev />
        </StyledButton>
        {props.isPlaying ? (
          <StyledButton
            onClick={() => {
              props.onPlayPause(false);
            }}
          >
            <IconPause />
          </StyledButton>
        ) : (
          <StyledButton
            onClick={() => {
              props.onPlayPause(true);
            }}
          >
            <IconPlay />
          </StyledButton>
        )}
        <StyledButton onClick={props.onNext}>
          <IconNext />
        </StyledButton>
        <StyledButton onClick={props.onRepeat}>
          {props.isRepeat ? <IconRepeatActivate /> : <IconRepeat />}
        </StyledButton>
      </Controller>
      <Playback>
        <Timer>{timeFormat(props.currentTime)}</Timer>
        <ProgressBar
          value={props.trackProgress}
          type={"range"}
          step="1"
          min="0"
          max={
            props.trackDuration ? props.trackDuration : `${props.trackDuration}`
          }
          onChange={(e) => props.onProgressChange(e.target.value)}
        />
        <Timer>{timeFormat(props.trackDuration)}</Timer>
      </Playback>
    </StyledDiv>
  );
}
