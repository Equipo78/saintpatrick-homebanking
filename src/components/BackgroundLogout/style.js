import styled from 'styled-components'
import bgimg1 from 'assets/background-logout/bg-img1.png'

export const BoxLogout = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80%;
  height: 450px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1565px) {
    width: 90%;
  }
  @media (max-width: 960px) {
    justify-content: center;
    width: 100%;
  }
`

export const ImgLogout = styled.div`
  flex: 1;
  background-image: url(${bgimg1});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  margin: 1rem;
  @media (max-width: 1565px) {
    background-position: center;
  }
  @media (max-width: 960px) {
    display: none;
  }
`
