<<<<<<< HEAD
const Home = () => {
  return <></>
=======
import React from "react";
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
} from "./styles";
import TopDecor2 from "../../assets/background-main/TopDecor2.svg";
import Copy from "../../assets/icons_svg/Copy.svg";
import Visible from "../../assets/icons_svg/Visible.svg";
// import Oculto from "../../assets/icons_svg/Oculto.svg";
import Transferencia from "../../assets/icons_svg/Icon/Transferencia.svg";
import TransferenciaWhite from "../../assets/icons_svg/Icon/TransferenciaWhite.svg";
import Tarjetas from "../../assets/icons_svg/Icon/Tarjetas.svg";
import Comprobantes from "../../assets/icons_svg/Icon/Comprobantes.svg";

const Home = () => {
  return (
    <HomeGridLayout>
      <HomeInfo>
        <TitleH3>Tu cuenta</TitleH3>
        <ContentContainer width="100%" flexAlignItems="center" gap="0 3rem">
          <PText margin="0.5rem 0">CBU: 00454545557879</PText>
          <Icon src={Copy} />
        </ContentContainer>
      </HomeInfo>
      <HomeSaldo>
        <CardContainer>
          <CardTopDecor src={TopDecor2} />
          <CardWrapper margin="2rem 3rem 0">
            <TitleH3>Saldo</TitleH3>
            <ContentContainer
              width="100%"
              flexDirection="row"
              flexAlignItems="center"
              gap="2rem"
            >
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
              width="100%"
              flexJustify="space-around"
              flexAlignItems="center"
              gap="0 3rem"
            >
              <Li>
                <ContentContainer
                  width="100%"
                  flexDirection="column"
                  flexAlignItems="center"
                  gap="0 3rem"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Transferencia} />
                  </IconBg>
                  <PText>Hacer Transferencia</PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  width="100%"
                  flexDirection="column"
                  flexAlignItems="center"
                  gap="0 3rem"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Comprobantes} />
                  </IconBg>
                  <PText>Ver Comprobantes</PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  width="100%"
                  flexDirection="column"
                  flexAlignItems="center"
                  gap="0 3rem"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Tarjetas} />
                  </IconBg>
                  <PText>Agregar Tarjeta</PText>
                </ContentContainer>
              </Li>
            </ContentContainer>
            <ContentContainer
              width="100%"
              flexJustify="space-around"
              flexAlignItems="center"
              gap="0 3rem"
            >
              <Li>
                <ContentContainer
                  width="100%"
                  flexDirection="column"
                  flexAlignItems="center"
                  gap="0 3rem"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Transferencia} />
                  </IconBg>
                  <PText>Agregar contacto</PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  width="100%"
                  flexDirection="column"
                  flexAlignItems="center"
                  gap="0 3rem"
                >
                  <IconBg backgroundColor="#F7C548">
                    <Icon src={Comprobantes} />
                  </IconBg>
                  <PText>Modificar Perfil</PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  width="100%"
                  flexDirection="column"
                  flexAlignItems="center"
                  gap="0 3rem"
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
            <Ul
              flexDirection="column"
              flexAlignItems="stretch"
              padding="0"
              gap="1.5rem"
            >
              <Li>
                <ContentContainer
                  width="70%"
                  flexAlignItems="center"
                  gap="1.5rem"
                >
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Te transfirieron dinero</PText>
                </ContentContainer>
                <ContentContainer
                  width="30%"
                  flexDirection="column"
                  flexAlignItems="flex-end"
                  gap="0"
                >
                  <PText weight="600" margin="0 0 0.5rem">
                    $2.000
                  </PText>
                  <PText size="12px" margin="0">
                    12/01
                  </PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  width="70%"
                  flexAlignItems="center"
                  gap="1.5rem"
                >
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Transferiste dinero</PText>
                </ContentContainer>
                <ContentContainer
                  width="30%"
                  flexDirection="column"
                  flexAlignItems="flex-end"
                  gap="0"
                >
                  <PText weight="600" margin="0 0 0.5rem">
                    $650
                  </PText>
                  <PText size="12px" margin="0">
                    12/01
                  </PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  width="70%"
                  flexAlignItems="center"
                  gap="1.5rem"
                >
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Pago AFIP</PText>
                </ContentContainer>
                <ContentContainer
                  width="30%"
                  flexDirection="column"
                  flexAlignItems="flex-end"
                  gap="0"
                >
                  <PText weight="600" margin="0 0 0.5rem">
                    $16.650
                  </PText>
                  <PText size="12px" margin="0">
                    12/12
                  </PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  width="70%"
                  flexAlignItems="center"
                  gap="1.5rem"
                >
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Te transfirieron dinero</PText>
                </ContentContainer>
                <ContentContainer
                  width="30%"
                  flexDirection="column"
                  flexAlignItems="flex-end"
                  gap="0"
                >
                  <PText weight="600" margin="0 0 0.5rem">
                    $650
                  </PText>
                  <PText size="12px" margin="0">
                    05/12
                  </PText>
                </ContentContainer>
              </Li>
              <Li>
                <ContentContainer
                  width="70%"
                  flexAlignItems="center"
                  gap="1.5rem"
                >
                  <IconBg backgroundColor="#005758">
                    <Icon src={TransferenciaWhite} />
                  </IconBg>
                  <PText>Transferiste dinero</PText>
                </ContentContainer>
                <ContentContainer
                  width="30%"
                  flexDirection="column"
                  flexAlignItems="flex-end"
                  gap="0"
                >
                  <PText weight="600" margin="0 0 0.5rem">
                    $1.650
                  </PText>
                  <PText size="12px" margin="0">
                    12/11
                  </PText>
                </ContentContainer>
              </Li>
            </Ul>
            <ContentContainer width="100%" flexJustify="flex-end">
              <PText margin="3rem 0">Ver mas</PText>
            </ContentContainer>
          </CardWrapper>
        </CardContainer>
      </HomeMovimientos>
    </HomeGridLayout>
  );
>>>>>>> d52828557477d8946c9679242658ba89f7409713
};

export default Home;
