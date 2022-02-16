import BackgroundLogin from "components/BackgroundLogin"
import Header from "components/Header"
import LoginContainer from "components/LoginContainer"
import { Wrapper } from "GlobalStyle"

const Login = () => {
  return (
    <Wrapper>
      <Header />
      <LoginContainer />
      <BackgroundLogin />
    </Wrapper>
  )
}

export default Login