import { Routes, Route } from "react-router-dom";
import { MainLayoutGrid } from "GlobalStyle";
import Header from "components/Header/Header";
import NavBar from "components/NavBar/NavBar";
import Main from "components/Main/Main";
import StepperContainer from "components/Transactions/StepperContainer";
import Home from "pages/Home/Home";
import Transacciones from "pages/Transacciones/Transacciones";
import Historial from "pages/Historial/Historial";
import Confirmacion from "pages/Confirmacion/Confirmacion";

const DashboardRoutes = () => {
  return (
    <MainLayoutGrid>
      <Header height="100%" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main page={<Home />}/>} />
        <Route path="/historial" element={<Main page={<Historial />}/>} />
        <Route path="/transacciones" element={<Main page={<Transacciones />}/>} />
        <Route path="/transactions" element={<Main page={<StepperContainer />}/>} />
        <Route path="/confirmacion" element={<Main page={<Confirmacion />}/>} />
      </Routes>
    </MainLayoutGrid>
  );
};

export default DashboardRoutes;
