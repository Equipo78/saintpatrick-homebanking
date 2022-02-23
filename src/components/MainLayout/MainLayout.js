import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NavBar from "../NavBar/NavBar";
import { MainLayoutGrid } from "./styles";

const MainLayout = () => {
  return (
    <MainLayoutGrid>
      <Header />
      <NavBar />
      <Main />
    </MainLayoutGrid>
  );
};

export default MainLayout;
