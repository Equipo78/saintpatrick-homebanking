//  styles
import { WrapperBackground } from 'GlobalStyle'
import background from 'assets/background-login/background.png'

import { BackgroundImgCenter, BackgroundImgLeft, Title } from './styles'

//  images

const BackgroundLogin = () => {
  return (
    <>
      <WrapperBackground background={background} position="right" />
      <Title>¡Hola! Te damos la bienvenida a nuestro Home Banking</Title>
      <BackgroundImgLeft />
      <BackgroundImgCenter />
    </>
  )
}

export default BackgroundLogin
