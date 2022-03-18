import { Title, Wrapper, ALink } from "./styles";
import { MainButton, TextButton, Arrow } from "../Buttons/styles";

const LogoutContainer = () => {
  return (
    <Wrapper>
      <Title>¡Muchas gracias por utilizar nuestro Home Banking!</Title>
      <ALink to="/login">
        <MainButton width="100%">
          <TextButton>VOLVER A INGRESAR</TextButton>
          <Arrow />
        </MainButton>
      </ALink>
    </Wrapper>
  );
};

export default LogoutContainer;
