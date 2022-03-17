import Transferencia from 'assets/icons_svg/Icon/Transferencia.svg'
import TopDecor1 from 'assets/background-main/TopDecor1.svg'

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
} from './styles'

const Historial = () => {
  return (
    <HistorialGridLayout>
      <HistorialArea>
        <CardContainer>
          <CardTopDecor src={TopDecor1} />
          <TitleH3 margin="3rem">Historial de transacciones</TitleH3>
          <Ul flexAlignItems="stretch" flexDirection="column" gap="1rem" padding="1rem 3rem">
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
            <Line border="1px solid rgba(0, 0, 0, 0.1)" />
            <Li>
              <ContentContainer flexAlignItems="center" gap="1.5rem" width="70%">
                <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                  <Icon src={Transferencia} />
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
        </CardContainer>
      </HistorialArea>
    </HistorialGridLayout>
  )
}

export default Historial
