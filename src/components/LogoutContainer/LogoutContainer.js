import { MainButton, TextButton, Arrow } from '../Buttons/styles'

import { Title, Wrapper } from './styles'

const LogoutContainer = () => {
  return (
    <Wrapper>
      <Title>¡Muchas gracias por utilizar nuestro Home Banking!</Title>
      <MainButton width="100%">
        <TextButton>VOLVER A INGRESAR</TextButton>
        <Arrow />
      </MainButton>
    </Wrapper>
  )
}

export default LogoutContainer
