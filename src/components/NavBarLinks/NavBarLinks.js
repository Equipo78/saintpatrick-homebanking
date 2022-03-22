import Home from 'assets/icons_svg/Icon/Home.svg'
import Saldos from 'assets/icons_svg/Icon/Saldos.svg'
import Movimientos from 'assets/icons_svg/Icon/Movimientos.svg'
import Transferencia from 'assets/icons_svg/Icon/Transferencia.svg'
import Tarjetas from 'assets/icons_svg/Icon/Tarjetas.svg'
import Comprobantes from 'assets/icons_svg/Icon/Comprobantes.svg'
import Perfil from 'assets/icons_svg/Icon/Perfil.svg'
import Ayuda from 'assets/icons_svg/Icon/Ayuda.svg'
import Salir from 'assets/icons_svg/Icon/Salir.svg'

import {
  NavBarUl,
  NavBarLi,
  NavBarIcon,
  ALink,
  SpaceBreak,
  PText,
  ContentContainer,
} from './styles'

const NavBarLinks = () => {
  return (
    <NavBarUl>
      <NavBarLi>
        <ALink to="/">
          <NavBarIcon src={Home} />
          <PText size="14px">Inicio</PText>
        </ALink>
      </NavBarLi>
      <NavBarLi>
        <ALink to="/saldos">
          <NavBarIcon src={Saldos} />
          <PText size="14px">Saldos</PText>
        </ALink>
      </NavBarLi>
      <NavBarLi>
        <ALink to="/historial">
          <NavBarIcon src={Movimientos} />
          <PText size="14px">Ultimos movimientos</PText>
        </ALink>
      </NavBarLi>
      <NavBarLi>
        <ALink to="/transacciones">
          <NavBarIcon src={Transferencia} />
          <PText size="14px">Transferencias</PText>
        </ALink>
      </NavBarLi>
      <NavBarLi>
        <ALink to="/tarjetas">
          <NavBarIcon src={Tarjetas} />
          <PText size="14px">Tarjetas</PText>
        </ALink>
      </NavBarLi>
      <NavBarLi>
        <ALink to="/comprobantes">
          <NavBarIcon src={Comprobantes} />
          <PText size="14px">Comprobantes</PText>
        </ALink>
      </NavBarLi>
      <NavBarLi>
        <ALink to="/contactos">
          <NavBarIcon src={Perfil} />
          <PText size="14px">Contactos</PText>
        </ALink>
      </NavBarLi>
      <SpaceBreak />
      <NavBarLi>
        <ALink to="/ayuda">
          <NavBarIcon src={Ayuda} />
          <PText size="14px">Centro de Ayuda</PText>
        </ALink>
      </NavBarLi>
      <NavBarLi>
        <ALink to="/logout">
          <NavBarIcon src={Salir} />
          <PText size="14px">Cerrar sesion</PText>
        </ALink>
      </NavBarLi>
      <SpaceBreak />
      <ContentContainer flexJustify="center" gap="0 0.5rem">
        <NavBarLi>
          <ALink to="/privacidad">
            <PText size="9px">Privacidad</PText>
          </ALink>
        </NavBarLi>
        <NavBarLi>
          <ALink to="/terminos">
            <PText size="9px">Terminos & Condiciones</PText>
          </ALink>
        </NavBarLi>
      </ContentContainer>
    </NavBarUl>
  )
}

export default NavBarLinks
