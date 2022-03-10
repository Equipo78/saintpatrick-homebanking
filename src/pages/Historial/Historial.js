import React from "react";
import {
  HistorialGridLayout,
  HistorialArea,
  CardContainer,
  TitleH3,
  CardTopDecor,
  ContentContainer,
  PText,
  Ul,
  Li,
  IconBg,
  Icon,
  Line,
} from "./styles";
import Transferencia from "../../assets/icons_svg/Icon/Transferencia.svg";
import TopDecor1 from "../../assets/background-main/TopDecor1.svg";

const Historial = () => {
  return (
    <HistorialGridLayout>
      <HistorialArea>
        <CardContainer>
          <CardTopDecor src={TopDecor1} />
          <TitleH3 margin="3rem">Historial de transacciones</TitleH3>
          <Ul
            flexDirection="column"
            flexAlignItems="stretch"
            padding="1rem 3rem"
            gap="1rem"
          >
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer
                width="70%"
                flexAlignItems="center"
                gap="1.5rem"
              >
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
        </CardContainer>
      </HistorialArea>
    </HistorialGridLayout>
  );
};

export default Historial;
