import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { MusicController } from "../components/MusicPlayer/MusicController";
import { PlayingTrack } from "../components/MusicPlayer/PlayingTrack";
import { SideController } from "../components/MusicPlayer/SideController";
import { tracks } from "../tracks";
const StyledDiv = styled.div`
  height: 90px;
  background-color: #181818;
  border-top: 1px solid #282828;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 16px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  min-width: 620px;
`;

export function MusicPlayer() {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  // Track
  const { title, artist, imageSrc, audioSrc } = tracks[trackIndex];

  // Reference
  const audioRef = useRef(new Audio(audioSrc)); //dùng cho audio bài hát
  const intervalRef = useRef(); //dùng cho inteval của timer và tiến độ bài hát
  const isReady = useRef(false); //dùng để ngăn việc tự động phát bài hát khi khỏi tạo

  // Timer
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      //tự động chuyển bài hát khi hết bài
      if (audioRef.current.ended) nextBtnHandler();
      else setTrackProgress(audioRef.current.currentTime);
      // console.log(audioRef.current.currentTime);
    }, [1000]);
  };

  //Nút phát lại
  const onRepeat = () => {
    if (isRepeat) setIsRepeat(false);
    else setIsRepeat(true);
  };

  //Nút xào bài hát
  const onShuffle = () => {
    if (isShuffle) setIsShuffle(false);
    else setIsShuffle(true);
    console.log(isShuffle);
  };

  //Nút lùi bài hát
  const prevBtnHandler = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
    console.log("prev song");
  };

  // Nút tiến bài hát
  const nextBtnHandler = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
    console.log("next song");
  };

  //Nút dừng-phát
  useEffect(() => {
    //tham chiếu theo state isPlaying là true thì phát, false thì dừng,
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
      console.log("play");
    } else {
      audioRef.current.pause();
      console.log("pause");
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   //Thực hiện 1 lần duy nhất khi bỏ đi bài hát cũ nên ko dùng tham chiếu
  //   console.log("test");
  //   return () => {
  //     audioRef.current.pause();
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);

  //cho việc thay đổi thanh tiến độ bài hát
  const onProgressChange = (value) => {
    clearInterval(audioRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  // cho việc thay đổi âm thanh
  const onVolumeChange = (value) => {
    audioRef.current.volume = value;
    setVolume(audioRef.current.volume);
  };

  // cho việc bấm bật tắt tiếng
  const onVolumeMute = () => {
    if (volume === 0) {
      onVolumeChange(1);
    } else {
      onVolumeChange(0);
    }
  };

  const { duration } = audioRef.current;

  // const currentPercentage = duration
  //   ? `${(trackProgress / duration) * 100}%`
  //   : "0%";

  // UseEffect cho chuyển bài
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    // logic của đoạn này chủ yếu cho lần đầu bắt buộc phải chạy vào cái else trước
    // vì nếu ban đầu mà để audioRef.current.play() cho lần khởi tạo đầu tiên sẽ báo exception
    if (isReady.current) {
      audioRef.current.play();
      startTimer();
      setIsPlaying(true);
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  return (
    <StyledDiv>
      <PlayingTrack title={title} artist={artist} imgSrc={imageSrc} />
      <MusicController
        onPrev={prevBtnHandler}
        onNext={nextBtnHandler}
        isPlaying={isPlaying}
        onPlayPause={setIsPlaying}
        trackProgress={trackProgress}
        onProgressChange={onProgressChange}
        trackDuration={duration}
        currentTime={audioRef.current.currentTime}
        onRepeat={onRepeat}
        isRepeat={isRepeat}
        onShuffle={onShuffle}
        isShuffle={isShuffle}
      />
      <SideController
        onVolumeChange={onVolumeChange}
        volume={volume}
        onMute={onVolumeMute}
      />
    </StyledDiv>
  );
}
