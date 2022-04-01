import { useAuth } from 'hooks/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth()

  if (token === '') return <Navigate to="/login" />

  return <>{children}</>
}

export default ProtectedRoute
