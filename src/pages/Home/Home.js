import TopDecor2 from 'assets/background-main/TopDecor2.svg'
import Copy from 'assets/icons_svg/Copy.svg'
import Visible from 'assets/icons_svg/Visible.svg'
// import Oculto from "assets/icons_svg/Oculto.svg";
import Transferencia from 'assets/icons_svg/Icon/Transferencia.svg'
import TransferenciaWhite from 'assets/icons_svg/Icon/TransferenciaWhite.svg'
import Tarjetas from 'assets/icons_svg/Icon/Tarjetas.svg'
import Comprobantes from 'assets/icons_svg/Icon/Comprobantes.svg'

import {
  CardContainer,
  TitleH3,
  CardWrapper,
  ContentContainer,
  CardTopDecor,
  PText,
  IconBg,
  HomeGridLayout,
  Ul,
  Li,
  Icon,
  HomeInfo,
  HomeSaldo,
  HomeMovimientos,
  HomeAcciones,
} from './styles'

const Home = () => {
  return (
    <HomeGridLayout>
      <HomeInfo>
        <TitleH3>Tu cuenta</TitleH3>
        <ContentContainer flexAlignItems="center" gap="0 3rem" width="100%">
          <PText margin="0.5rem 0">CBU: 00454545557879</PText>
          <Icon src={Copy} />
        </ContentContainer>
      </HomeInfo>
      <HomeSaldo>
        <CardContainer>
          <CardTopDecor src={TopDecor2} />
          <CardWrapper margin="2rem 3rem 0">
            <TitleH3>Saldo</TitleH3>
            <ContentContainer flexAlignItems="center" flexDirection="row" gap="2rem" width="100%">
              <PText size="32px">$45.000</PText>
              <Icon src={Visible} />
            </ContentContainer>
          </CardWrapper>
        </CardContainer>
      </HomeSaldo>
      <HomeAcciones>
        <CardContainer>
          <Ul flexDirection="column" gap="2rem" padding="2rem 3rem 1rem">
            <ContentContainer
              flexAlignItems="center"
              flexJustify="space-around"
              gap="0 3rem"
              width="100%"
            >
              <Li>
                <ContentContainer
                  flexAlignItems="center"
                  flexDirection="column"
                  gap="0 3rem"
                  width="100%"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Transferencia} />
                  </IconBg>
                  <PText>Hacer Transferencia</PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  flexAlignItems="center"
                  flexDirection="column"
                  gap="0 3rem"
                  width="100%"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Comprobantes} />
                  </IconBg>
                  <PText>Ver Comprobantes</PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  flexAlignItems="center"
                  flexDirection="column"
                  gap="0 3rem"
                  width="100%"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Tarjetas} />
                  </IconBg>
                  <PText>Agregar Tarjeta</PText>
                </ContentContainer>
              </Li>
            </ContentContainer>
            <ContentContainer
              flexAlignItems="center"
              flexJustify="space-around"
              gap="0 3rem"
              width="100%"
            >
              <Li>
                <ContentContainer
                  flexAlignItems="center"
                  flexDirection="column"
                  gap="0 3rem"
                  width="100%"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Transferencia} />
                  </IconBg>
                  <PText>Agregar contacto</PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  flexAlignItems="center"
                  flexDirection="column"
                  gap="0 3rem"
                  width="100%"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Comprobantes} />
                  </IconBg>
                  <PText>Modificar Perfil</PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  flexAlignItems="center"
                  flexDirection="column"
                  gap="0 3rem"
                  width="100%"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Tarjetas} />
                  </IconBg>
                  <PText>Necesito Ayuda</PText>
                </ContentContainer>
              </Li>
            </ContentContainer>
          </Ul>
        </CardContainer>
      </HomeAcciones>
      <HomeMovimientos>
        <CardContainer>
          <CardWrapper margin="2rem 3rem">
            <TitleH3>Ultimos movimientos</TitleH3>
            <Ul flexAlignItems="stretch" flexDirection="column" gap="1.5rem" padding="0">
              <Li>
                <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Te transfirieron dinero</PText>
                </ContentContainer>
                <ContentContainer
                  flexAlignItems="flex-end"
                  flexDirection="column"
                  gap="0"
                  width="30%"
                >
                  <PText margin="0 0 0.5rem" weight="600">
                    $2.000
                  </PText>
                  <PText margin="0" size="12px">
                    12/01
                  </PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Transferiste dinero</PText>
                </ContentContainer>
                <ContentContainer
                  flexAlignItems="flex-end"
                  flexDirection="column"
                  gap="0"
                  width="30%"
                >
                  <PText margin="0 0 0.5rem" weight="600">
                    $650
                  </PText>
                  <PText margin="0" size="12px">
                    12/01
                  </PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Pago AFIP</PText>
                </ContentContainer>
                <ContentContainer
                  flexAlignItems="flex-end"
                  flexDirection="column"
                  gap="0"
                  width="30%"
                >
                  <PText margin="0 0 0.5rem" weight="600">
                    $16.650
                  </PText>
                  <PText margin="0" size="12px">
                    12/12
                  </PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Te transfirieron dinero</PText>
                </ContentContainer>
                <ContentContainer
                  flexAlignItems="flex-end"
                  flexDirection="column"
                  gap="0"
                  width="30%"
                >
                  <PText margin="0 0 0.5rem" weight="600">
                    $650
                  </PText>
                  <PText margin="0" size="12px">
                    05/12
                  </PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Transferiste dinero</PText>
                </ContentContainer>
                <ContentContainer
                  flexAlignItems="flex-end"
                  flexDirection="column"
                  gap="0"
                  width="30%"
                >
                  <PText margin="0 0 0.5rem" weight="600">
                    $1.650
                  </PText>
                  <PText margin="0" size="12px">
                    12/11
                  </PText>
                </ContentContainer>
              </Li>
            </Ul>
            <ContentContainer flexJustify="flex-end" width="100%">
              <PText margin="3rem 0">Ver mas</PText>
            </ContentContainer>
          </CardWrapper>
        </CardContainer>
      </HomeMovimientos>
    </HomeGridLayout>
  )
}

export default Home
