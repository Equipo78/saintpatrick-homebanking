import useMediaQuery from 'hooks/useMediaQuery'
import Home from 'assets/icons_svg/Icon/Home.svg'
import Saldos from 'assets/icons_svg/Icon/Saldos.svg'
import Movimientos from 'assets/icons_svg/Icon/Movimientos.svg'
import Transferencia from 'assets/icons_svg/Icon/Transferencia.svg'
import Tarjetas from 'assets/icons_svg/Icon/Tarjetas.svg'
import Comprobantes from 'assets/icons_svg/Icon/Comprobantes.svg'
import Perfil from 'assets/icons_svg/Icon/Perfil.svg'
import Ayuda from 'assets/icons_svg/Icon/Ayuda.svg'
import Salir from 'assets/icons_svg/Icon/Salir.svg'

import { NavBarContainer, NavBarUl, NavBarLi, NavBarIcon, SpaceBreak } from './styles'

const NavBar = () => {
  const isDesktop = useMediaQuery('(min-width: 990px)')

  return (
    <NavBarContainer display={isDesktop ? 'flex' : 'none'}>
      <NavBarUl>
        <NavBarLi>
          <NavBarIcon src={Home} />
          Inicio
        </NavBarLi>
        <NavBarLi>
          <NavBarIcon src={Saldos} />
          Saldos
        </NavBarLi>
        <NavBarLi>
          <NavBarIcon src={Movimientos} />
          Ultimos movimientos
        </NavBarLi>
        <NavBarLi>
          <NavBarIcon src={Transferencia} />
          Transferencias
        </NavBarLi>
        <NavBarLi>
          <NavBarIcon src={Tarjetas} />
          Tarjetas
        </NavBarLi>
        <NavBarLi>
          <NavBarIcon src={Comprobantes} />
          Comprobantes
        </NavBarLi>
        <NavBarLi>
          <NavBarIcon src={Perfil} />
          Contactos
        </NavBarLi>
        <SpaceBreak />
        <NavBarLi>
          <NavBarIcon src={Ayuda} />
          Centro de ayuda
        </NavBarLi>
        <NavBarLi>
          <NavBarIcon src={Salir} />
          Cerrar sesion
        </NavBarLi>
      </NavBarUl>
    </NavBarContainer>
  )
}

export default NavBar
