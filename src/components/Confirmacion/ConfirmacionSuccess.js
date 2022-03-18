import Success from 'assets/loader/Success.svg'
import Saldos from 'assets/icons_svg/Icon/Saldos.svg'
import Calendar from 'assets/icons_svg/Calendar.svg'
import TopDecor1 from 'assets/background-main/TopDecor1.svg'

import {
  CardContainer,
  TitleH3,
  CardTopDecor,
  ContentContainer,
  PText,
  IconBg,
  Icon,
  Img,
} from './styles'

const ConfirmacionSuccess = () => {
  return (
    <CardContainer>
      <CardTopDecor src={TopDecor1} />
      <ContentContainer
        flexAlignItems="center"
        flexDirection="column"
        flexJustify="flex-start"
        margin="2rem"
      >
        <ContentContainer>
          <Img src={Success} />
        </ContentContainer>
        <TitleH3 margin="2rem 0">Transferencia realizada correctamente!</TitleH3>
        <ContentContainer
          flexAlignItems="flex-start"
          flexDirection="column"
          flexJustify="flex-start"
        >
          <ContentContainer flexAlignItems="center" gap="0.5rem" margin="0.5rem">
            <IconBg border="1px solid #B1B1B1">
              <Icon src={Calendar} />
            </IconBg>
            <PText>12 de enero 2022 | 19:46 hs</PText>
          </ContentContainer>
          <ContentContainer flexAlignItems="center" gap="0.5rem" margin="0.5rem">
            <IconBg border="1px solid #B1B1B1">
              <Icon src={Saldos} />
            </IconBg>
            <PText>$2.000</PText>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
    </CardContainer>
  )
}

export default ConfirmacionSuccess
