const { createContext, useState } = require('react')

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  const [token, setToken] = useState('')

  return (
    <AuthContext.Provider value={{ token, isLogged, setIsLogged, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
