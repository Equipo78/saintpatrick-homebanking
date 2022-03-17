import { Routes, Route } from 'react-router-dom'
import { MainLayoutGrid } from 'GlobalStyle'
import Header from 'components/Header/Header'
import NavBar from 'components/NavBar/NavBar'
import StepperContainer from 'components/Transactions/StepperContainer'

const DashboardRoutes = () => {
  return (
    <MainLayoutGrid>
      <Header height="100%" />
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route element={<StepperContainer />} path="/transactions" />
      </Routes>
    </MainLayoutGrid>
  )
}

export default DashboardRoutes
