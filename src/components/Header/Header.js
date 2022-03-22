import logo from 'assets/logo.png'
import { useState } from 'react'

import { HeaderStyled, Logo, MenuContainer, Menu, Close } from './styles'

const Header = ({ height }) => {
  const [navToggle, setNavToggle] = useState(false)

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
