const { createGlobalStyle, default: styled } = require("styled-components");

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
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 100vh;
`;

export const WrapperBackground = styled.div`
  z-index: -1;
  position: relative;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: ${props => props.position};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  object-fit:cover;
`;