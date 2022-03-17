import { keyframes } from 'styled-components'

const { createGlobalStyle, default: styled } = require('styled-components')

export const GlobalStyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

:root{
  --primary: #005758;
  --secondary: #F7C548;
}
`

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 100vh;
`

export const WrapperBackground = styled.div`
  grid-column: 1/-1;
  grid-row: 1/-1;
  z-index: -1;
  position: relative;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: ${(props) => props.position};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  object-fit: cover;
`

export const MainLayoutGrid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.6fr 2.4fr;
  grid-template-rows: 0.2fr 2.8fr;
  grid-template-areas:
    'header header'
    'navbar main';
  @media (max-width: 990px) {
    grid-template-areas:
      'header header'
      'main main';
  }
`

export const GridLogin = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1fr;
  grid-template-rows: 0.5fr 0.7fr 1fr;
  height: 100vh;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.4fr 1fr;
  }
`

//  animations
export const fadeIn = keyframes`
 from {
  opacity: 0
 }
 to {
  opacity: 1
 }
`
