import React from "react";
import {
  TransaccionesGridLayout,
  TransaccionesCuenta,
  TransaccionesUltimas,
  CardContainer,
  TitleH3,
  ContentContainer,
  PText,
  IconBg,
  Ul,
  Li,
  Icon,
  Line,
} from "./styles";

import Plus from "../../assets/icons_svg/Plus.svg";
import StarEmpty from "../../assets/icons_svg/StarEmpty.svg";
import StarFilled from "../../assets/icons_svg/StarFilled.svg";
import Settings from "../../assets/icons_svg/Settings.svg";
import Contact from "../../assets/icons_svg/Contact.svg";

const Transacciones = () => {
  return (
    <TransaccionesGridLayout>
      <TransaccionesCuenta>
        <CardContainer>
          <TitleH3 margin="1.5rem 2rem">Elegi a que cuenta transferir</TitleH3>
          <Line border="1px solid rgba(0, 0, 0, 0.1)" />
          <ContentContainer flexAlignItems="center" margin="1rem 2rem">
            <IconBg backgroundColor="rgba(0,87,88, 0.1)">
              <Icon src={Plus} />
            </IconBg>
            <PText margin="0 1rem" color="rgba(0,87,88, 1)">
              Agregar Cuenta
            </PText>
          </ContentContainer>
        </CardContainer>
      </TransaccionesCuenta>
      <TransaccionesUltimas>
        <CardContainer>
          <ContentContainer flexJustify="space-evenly">
            <ContentContainer
              flexDirection="column"
              flexAlignItems="center"
              width="100%"
            >
              <PText weight="600" color="rgba(0, 87, 88, 1)">
                Ultimas
              </PText>
              <Line border="3px solid rgba(0, 87, 88, 1)" />
            </ContentContainer>
            <ContentContainer
              flexDirection="column"
              flexAlignItems="center"
              width="100%"
            >
              <PText>Favoritas</PText>
              <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            </ContentContainer>
          </ContentContainer>
          <Ul flexDirection="column" padding="1rem 2rem">
            <Li>
              <ContentContainer
                width="100%"
                flexAlignItems="center"
                flexJustify="space-between"
                margin="1rem"
              >
                <ContentContainer flexAlignItems="center">
                  <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                    <Icon src={Contact} />
                  </IconBg>
                  <ContentContainer
                    flexDirection="column"
                    flexAlignItems="flex-start"
                  >
                    <PText margin="0 1rem">Sofia Gomez</PText>
                    <PText margin="0 1rem">Banco Galicia</PText>
                  </ContentContainer>
                </ContentContainer>
                <ContentContainer>
                  <Icon src={StarEmpty} />
                  <Icon src={Settings} />
                </ContentContainer>
              </ContentContainer>
            </Li>
            <Li>
              <ContentContainer
                width="100%"
                flexAlignItems="center"
                flexJustify="space-between"
                margin="1rem"
              >
                <ContentContainer flexAlignItems="center">
                  <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                    <Icon src={Contact} />
                  </IconBg>
                  <ContentContainer
                    flexDirection="column"
                    flexAlignItems="flex-start"
                  >
                    <PText margin="0 1rem">Agustin Baez</PText>
                    <PText margin="0 1rem">BBVA Frances</PText>
                  </ContentContainer>
                </ContentContainer>
                <ContentContainer>
                  <Icon src={StarEmpty} />
                  <Icon src={Settings} />
                </ContentContainer>
              </ContentContainer>
            </Li>
            <Li>
              <ContentContainer
                width="100%"
                flexAlignItems="center"
                flexJustify="space-between"
                margin="1rem"
              >
                <ContentContainer flexAlignItems="center">
                  <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                    <Icon src={Contact} />
                  </IconBg>
                  <ContentContainer
                    flexDirection="column"
                    flexAlignItems="flex-start"
                  >
                    <PText margin="0 1rem">Eva Matheo</PText>
                    <PText margin="0 1rem">Mercado Pago</PText>
                  </ContentContainer>
                </ContentContainer>
                <ContentContainer>
                  <Icon src={StarEmpty} />
                  <Icon src={Settings} />
                </ContentContainer>
              </ContentContainer>
            </Li>
            <Li>
              <ContentContainer
                width="100%"
                flexAlignItems="center"
                flexJustify="space-between"
                margin="1rem"
              >
                <ContentContainer flexAlignItems="center">
                  <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                    <Icon src={Contact} />
                  </IconBg>
                  <ContentContainer
                    flexDirection="column"
                    flexAlignItems="flex-start"
                  >
                    <PText margin="0 1rem">Cynthia Perez</PText>
                    <PText margin="0 1rem">Santander</PText>
                  </ContentContainer>
                </ContentContainer>
                <ContentContainer>
                  <Icon src={StarEmpty} />
                  <Icon src={Settings} />
                </ContentContainer>
              </ContentContainer>
            </Li>
            <Li>
              <ContentContainer
                width="100%"
                flexAlignItems="center"
                flexJustify="space-between"
                margin="1rem"
              >
                <ContentContainer flexAlignItems="center">
                  <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                    <Icon src={Contact} />
                  </IconBg>
                  <ContentContainer
                    flexDirection="column"
                    flexAlignItems="flex-start"
                  >
                    <PText margin="0 1rem">Jimena Suarez</PText>
                    <PText margin="0 1rem">Banco Galicia</PText>
                  </ContentContainer>
                </ContentContainer>
                <ContentContainer>
                  <Icon src={StarEmpty} />
                  <Icon src={Settings} />
                </ContentContainer>
              </ContentContainer>
            </Li>
            <Li>
              <ContentContainer
                width="100%"
                flexAlignItems="center"
                flexJustify="space-between"
                margin="1rem"
              >
                <ContentContainer flexAlignItems="center">
                  <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                    <Icon src={Contact} />
                  </IconBg>
                  <ContentContainer
                    flexDirection="column"
                    flexAlignItems="flex-start"
                  >
                    <PText margin="0 1rem">Juan Sosa</PText>
                    <PText margin="0 1rem">BBVA Frances</PText>
                  </ContentContainer>
                </ContentContainer>
                <ContentContainer>
                  <Icon src={StarEmpty} />
                  <Icon src={Settings} />
                </ContentContainer>
              </ContentContainer>
            </Li>
          </Ul>
          <ContentContainer flexJustify="flex-end" margin="0 2rem">
            <PText color="rgba(0, 87, 88, 1)">Ver mas</PText>
          </ContentContainer>
        </CardContainer>
      </TransaccionesUltimas>
    </TransaccionesGridLayout>
  );
};

export default Transacciones;
