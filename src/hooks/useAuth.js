const { default: AuthContext } = require('context/AuthContext')
const { useContext } = require('react')

const useAuth = () => {
  const { token, isLogged, setIsLogged, setToken } = useContext(AuthContext)

  const login = ({ data }) => {
    console.log(data.meta.login)
    setIsLogged(true)
    setToken(data.meta.login)
    sessionStorage.setItem('token', data.meta.login)
  }

  return { login, isLogged, token }
}

export { useAuth }
