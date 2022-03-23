import logo from 'assets/logo.png'

import { HeaderStyled, Logo, MenuContainer, Menu, Close } from './styles'

const Header = ({ height, navToggle, setNavToggle }) => {
  const toggleHandler = () => {
    return setNavToggle((navToggle) => !navToggle)
  }

  return (
    <HeaderStyled height={height}>
      <MenuContainer onClick={toggleHandler}>
        {navToggle ? <Close fontSize="large" /> : <Menu fontSize="large" />}
      </MenuContainer>
      <Logo alt="logo" src={logo} />
    </HeaderStyled>
  )
}

export default Header
