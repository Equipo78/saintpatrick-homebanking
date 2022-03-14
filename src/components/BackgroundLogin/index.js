<<<<<<< Updated upstream
import { Background, BackgroundImgCenter, BackgroundImgLeft } from "./styles";
const BackgroundLogin = () => {
  return <Background>
    <BackgroundImgLeft />
    <BackgroundImgCenter />
  </Background>
=======
//  styles
import { WrapperBackground } from "GlobalStyle";
import { BackgroundImgCenter, BackgroundImgLeft, Title } from "./styles";
//  images
import background from "assets/background-login/background.png";

const BackgroundLogin = () => {
  return (
    <>
      <WrapperBackground position="right" background={background} />
      <Title>¡Hola! Te damos la bienvenida a nuestro Home Banking</Title>
      <BackgroundImgLeft />
      <BackgroundImgCenter />
    </>
  );
>>>>>>> Stashed changes
};

export default BackgroundLogin;
