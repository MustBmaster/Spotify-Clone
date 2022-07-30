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
} from "../components/Common/Icons";
const StyledDiv = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding-top: 24px;
  min-height: 0;
  height: 100vh;
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
    </StyledDiv>
  );
}
