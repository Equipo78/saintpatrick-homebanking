import BackgroundLogin from "components/BackgroundLogin";
import Header from "components/Header/Header";
import LoginContainer from "components/LoginContainer";
import { Wrapper } from "GlobalStyle";

const Login = () => {
  return (
    <Wrapper>
      <Header height="4.4rem" />
      <LoginContainer />
      <BackgroundLogin />
    </Wrapper>
  );
};

export default Login;
