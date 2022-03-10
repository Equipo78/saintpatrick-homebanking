import styled from "styled-components";
import bgleft from "assets/background-login/bg-img1.png";
import bgcenter from "assets/background-login/bg-img2.png";

export const BackgroundImgLeft = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto 0 auto 10rem;
  background-image: url(${bgleft});
  background-repeat: no-repeat;
  background-size: contain;
  width: 400px;
  height: 400px;
  @media (max-width: 1315px) {
    margin: auto 0 auto 3rem;
  }
  @media (max-width: 965px) {
    display: none;
  }
`;

export const BackgroundImgCenter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto 5rem auto;
  background-image: url(${bgcenter});
  background-size: contain;
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
  @media (max-width: 1570px) {
    display: none;
  }
`;
