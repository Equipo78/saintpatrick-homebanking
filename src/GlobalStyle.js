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
