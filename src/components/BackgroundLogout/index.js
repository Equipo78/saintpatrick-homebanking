import { WrapperBackground } from 'GlobalStyle'
import LogoutContainer from 'components/LogoutContainer'
import background from 'assets/background-logout/background.png'

import { BoxLogout, ImgLogout } from './style'

const BackgroundLogout = () => {
  return (
    <>
      <WrapperBackground background={background} position="left" />
      <BoxLogout>
        <ImgLogout />
        <LogoutContainer />
      </BoxLogout>
    </>
  )
}

export default BackgroundLogout
