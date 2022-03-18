import logo from 'assets/logo.png'

import { HeaderStyled, Logo } from './styles'

const Header = ({ height }) => {
  return (
    <HeaderStyled height={height}>
      <Logo alt="logo" src={logo} />
    </HeaderStyled>
  )
}

export default Header
