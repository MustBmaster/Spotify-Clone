import styled from "styled-components";
import BannerLogo from "../../assets/logo-and-brand-assets/Spotify_Logo_RGB_White.png";
const StyledDiv = styled.div`
  padding: 0 24px;
  margin-bottom: 18px;
`;
export function Banner() {
  return (
    <StyledDiv>
      <a href="blank">
        <img src={BannerLogo} height="40" alt="Spotify" />
      </a>
    </StyledDiv>
  );
}
