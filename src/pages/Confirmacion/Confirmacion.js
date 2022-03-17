import Loading from 'assets/loader/Loading.svg'
import Saldos from 'assets/icons_svg/Icon/Saldos.svg'
import Calendar from 'assets/icons_svg/Calendar.svg'
import TopDecor1 from 'assets/background-main/TopDecor1.svg'

import {
  ConfirmacionGridLayout,
  ConfirmacionCard,
  ConfirmacionBtns,
  CardContainer,
  TitleH3,
  CardTopDecor,
  ContentContainer,
  PText,
  IconBg,
  Icon,
  Img,
} from './styles'

const Confirmacion = () => {
  return (
    <ConfirmacionGridLayout>
      <ConfirmacionCard>
        <CardContainer>
          <CardTopDecor src={TopDecor1} />
          <ContentContainer
            flexAlignItems="center"
            flexDirection="column"
            flexJustify="flex-start"
            margin="2rem"
          >
            <Img src={Loading} />
            <TitleH3 margin="2rem 0">Realizando transferencia...</TitleH3>
            <ContentContainer
              flexAlignItems="flex-start"
              flexDirection="column"
              flexJustify="flex-start"
            >
              <ContentContainer flexAlignItems="center" gap="0.5rem">
                <IconBg border="1px solid #B1B1B1">
                  <Icon src={Calendar} />
                </IconBg>
                <PText>12 de enero 2022 | 19:46 hs</PText>
              </ContentContainer>
              <ContentContainer flexAlignItems="center" gap="0.5rem">
                <IconBg border="1px solid #B1B1B1">
                  <Icon src={Saldos} />
                </IconBg>
                <PText>$2.000</PText>
              </ContentContainer>
            </ContentContainer>
          </ContentContainer>
        </CardContainer>
      </ConfirmacionCard>
      <ConfirmacionBtns>
        <ContentContainer flexJustify="flex-end" gap="1rem">
          <PText color="#005758" weight="600">
            Volver al Inicio
          </PText>
          <ContentContainer flexAlignItems="center" flexJustify="center">
            <CardContainer backgroundColor="#005758">
              <PText color="#fff" margin="1rem">
                VER COMPROBANTE
              </PText>
            </CardContainer>
          </ContentContainer>
        </ContentContainer>
      </ConfirmacionBtns>
    </ConfirmacionGridLayout>
  )
}

export default Confirmacion
