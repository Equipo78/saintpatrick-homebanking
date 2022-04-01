import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from 'pages/Login/Login'
import Logout from 'pages/Logout/Logout'
import { TransactionsProvider } from 'context/TransactionsContext'
import { AuthProvider } from 'context/AuthContext'
import ProtectedRoute from 'components/ProtectedRoute'

import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TransactionsProvider>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
              path="/logout"
            />
            <Route
              element={
                <ProtectedRoute>
                  <DashboardRoutes />
                </ProtectedRoute>
              }
              path="/*"
            />
          </Routes>
        </TransactionsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRouter
