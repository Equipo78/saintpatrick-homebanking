import styled from "styled-components";
import background from "assets/background-login/background.png";
import bgleft from "assets/background-login/bg-img1.png";
import bgcenter from "assets/background-login/bg-img2.png";

export const Background = styled.div`
  z-index: -1;
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-position: right;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  object-fit:cover;
`;


export const BackgroundImgLeft = styled.div`
position:absolute;
bottom: 0;
top: 0;
margin: auto 0 auto 4rem;
background-image: url(${bgleft});
background-repeat: no-repeat;
width: 500px;
height: 500px;
`

export const BackgroundImgCenter = styled.div`
position:absolute;
left: 0;
right: 0;
bottom: 0;
margin: auto;
background-image: url(${bgcenter});
background-repeat: no-repeat;
width: 500px;
height: 500px;
`