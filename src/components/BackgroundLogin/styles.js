import styled from "styled-components";
import bgleft from "assets/background-login/bg-img1.png";
import bgcenter from "assets/background-login/bg-img2.png";

export const BackgroundImgLeft = styled.div`
  grid-column: 1;
  grid-row: 2;
  place-self: center;
  background-image: url(${bgleft});
  background-repeat: no-repeat;
  background-size: contain;
  width: 400px;
  height: 300px;
  @media (max-width: 1200px) {
    place-self: start center;
    margin: 3rem 1rem 0 1rem;
  }
  @media (max-width: 920px) {
    grid-column: 1/-1;
  }
  @media (max-width: 500px) {
    width: 350px;
    height: 250px;
  }
  @media (max-width: 350px) {
    width: 300px;
    height: 200px;
  }
`;

export const BackgroundImgCenter = styled.div`
  grid-column: 2;
  grid-row: 3;
  justify-self: center;
  background-image: url(${bgcenter});
  background-size: contain;
  background-repeat: no-repeat;
  width: 340px;
  height: 400px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Title = styled.h1`
  grid-column: 1 / span 2;
  grid-row: 1;
  place-self: center;
  width: 90%;
  font-family: "Bona Nova", serif;
  font-weight: 400;
  font-size: 3.5rem;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;
