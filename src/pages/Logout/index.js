import BackgroundLogout from "components/BackgroundLogout";
import Header from "components/Header";
import { Wrapper } from "GlobalStyle";


const Logout = () => {
  return (
    <Wrapper>
      <Header />
      <BackgroundLogout />
    </Wrapper>
  );
};

export default Logout;
