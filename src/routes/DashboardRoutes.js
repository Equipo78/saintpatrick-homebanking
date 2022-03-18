import { Routes, Route } from 'react-router-dom'
import { MainLayoutGrid } from 'GlobalStyle'
import Header from 'components/Header/Header'
import NavBar from 'components/NavBar/NavBar'
import Main from 'components/Main/Main'
import StepperContainer from 'components/Transactions/StepperContainer'
import Home from 'pages/Home/Home'
import Transacciones from 'pages/Transacciones/Transacciones'
import Historial from 'pages/Historial/Historial'
import Confirmacion from 'pages/Confirmacion/Confirmacion'

const DashboardRoutes = () => {
  return (
    <MainLayoutGrid>
      <Header height="4.4rem" />
      <NavBar />
      <Routes>
        <Route element={<Main page={<Home />} />} path="/" />
        <Route element={<Main page={<Historial />} />} path="/historial" />
        <Route element={<Main page={<Transacciones />} />} path="/transacciones" />
        <Route element={<Main page={<StepperContainer />} />} path="/transactions" />
        <Route element={<Main page={<Confirmacion />} />} path="/confirmacion" />
      </Routes>
    </MainLayoutGrid>
  )
}

export default DashboardRoutes
