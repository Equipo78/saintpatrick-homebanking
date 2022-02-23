import { Routes, Route } from "react-router-dom";
import { MainLayoutGrid } from "GlobalStyle";
import Header from "components/Header/Header";
import NavBar from "components/NavBar/NavBar";
import Home from "pages/Home/Home";

const DashboardRoutes = () => {
  return (
    <MainLayoutGrid>
      <Header height="100%" />
      <NavBar />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </MainLayoutGrid>
  );
};

export default DashboardRoutes;
