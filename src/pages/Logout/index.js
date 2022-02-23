import BackgroundLogout from "components/BackgroundLogout";
import Header from "components/Header/Header";
import { Wrapper } from "GlobalStyle";

const Logout = () => {
  return (
    <Wrapper>
      <Header height="4.4rem" />
      <BackgroundLogout />
    </Wrapper>
  );
};

export default Logout;
