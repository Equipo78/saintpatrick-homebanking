import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from 'pages/Login/Login'
import Logout from 'pages/Logout/Logout'
import { TransactionsProvider } from 'context/TransactionsContext'

import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Logout />} path="/logout" />
          <Route element={<DashboardRoutes />} path="/*" />
        </Routes>
      </TransactionsProvider>
    </BrowserRouter>
  )
}

export default AppRouter
