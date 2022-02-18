//  styles
import { WrapperBackground } from "GlobalStyle";
import { BoxLogout, ImgLogout } from "./style";
//  components
import LogoutContainer from "components/LogoutContainer";
//  images
import background from "assets/background-logout/background.png";

const BackgroundLogout = () => {
  return (
    <>
      <WrapperBackground position="left" background={background} />
      <BoxLogout>
        <ImgLogout />
        <LogoutContainer />
      </BoxLogout>
    </>
  );
};
export default BackgroundLogout;
