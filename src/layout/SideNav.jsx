import styled from "styled-components";
import { Banner } from "../components/Sidenav/Banner";
import { NavItem } from "../components/Sidenav/NavItem";
import {
  IconHome,
  IconHomeFill,
  IconSearch,
  IconSearchFill,
  IconLibrary,
  IconLibraryFill,
  IconAddPlaylist,
  IconLikedSong,
  IconDownload,
} from "../components/Common/Icons";
import { Playlist } from "../components/Sidenav/Playlist";
const StyledDiv = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding-top: 24px;
  min-height: 100vh;
  height: 100%;
  flex: 1;
  background-color: #000;
`;
export function SideNav() {
  return (
    <StyledDiv>
      <Banner />
      <NavItem>
        <IconHome />
        Home
      </NavItem>
      <NavItem>
        <IconSearch />
        Search
      </NavItem>
      <NavItem>
        <IconLibrary />
        Your Library
      </NavItem>
      <br />
      <NavItem>
        <IconAddPlaylist />
        Create Playlist
      </NavItem>
      <NavItem>
        <IconLikedSong />
        Liked Songs
      </NavItem>
      <NavItem>
        <hr />
      </NavItem>
      <Playlist>
        <ul>
          <li>Minh</li>
          <li>Minh</li>
          <li>Minh</li>
          <li>Minh</li>
          <li>Minh</li>
          <li>Minh</li>
          <li>Minh</li>
          <li>Minh</li>
        </ul>
      </Playlist>
      <NavItem>
        <IconDownload />
        Install App
      </NavItem>
      <div style={{ height: "90px" }}></div>
    </StyledDiv>
  );
}
