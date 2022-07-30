import styled from "styled-components";
import { IconHeart, IconHeartFill } from "../Common/Icons";
const StyledDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: var(--inactive-color);
  > * {
    cursor: pointer;
    &:hover {
      color: var(--select-hover-color);
    }
  }
`;

const StyledImg = styled.img`
  width: 56px;
  height: 56px;
`;

const SongInfo = styled.div`
  margin: 0 14px;
  column-gap: 8px;
  color: var(--select-hover-color);
  > * {
    font-weight: 400;
    &:hover {
      text-decoration: underline;
    }
  }
  .songName {
    font-size: 0.875rem;
  }
  .artist {
    font-size: 0.6875rem;
  }
`;
export function PlayingTrack(props) {
  return (
    <StyledDiv>
      <StyledImg src={props.imgSrc} />
      <SongInfo>
        <div className="songName">{props.title}</div>
        <div className="artist">{props.artist}</div>
      </SongInfo>
      {props.isLiked ? <IconHeart /> : <IconHeartFill />}
    </StyledDiv>
  );
}
