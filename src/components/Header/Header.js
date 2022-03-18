import logo from 'assets/logo.png'

import { HeaderStyled, Logo, Menu } from './styles'

const Header = ({ height }) => {
  return (
    <HeaderStyled height={height}>
      <Menu fontSize="large" />
      <Logo alt="logo" src={logo} />
    </HeaderStyled>
  )
}

export default Header
