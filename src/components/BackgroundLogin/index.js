//  styles
import { WrapperBackground } from "GlobalStyle";
import { BackgroundImgCenter, BackgroundImgLeft } from "./styles";
//  images
import background from "assets/background-login/background.png";

const BackgroundLogin = () => {
  return (
    <WrapperBackground position="right" background={background}>
      <BackgroundImgLeft />
      <BackgroundImgCenter />
    </WrapperBackground>
  );
};

export default BackgroundLogin;
