import styled from "styled-components";

export const MainLayoutGrid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.6fr 2.4fr;
  grid-template-rows: 0.2fr 2.8fr;
  grid-template-areas:
    "header header header"
    "navbar main main";
`;
