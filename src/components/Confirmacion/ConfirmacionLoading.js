import React from 'react'

import Loading from "../../assets/loader/Loading.svg";
import Saldos from "../../assets/icons_svg/Icon/Saldos.svg";
import Calendar from "../../assets/icons_svg/Calendar.svg";
import TopDecor1 from "../../assets/background-main/TopDecor1.svg";
import Loader from "../../assets/loader/Loader.png";

import {
    CardContainer,
    TitleH3,
    CardTopDecor,
    ContentContainer,
    PText,
    IconBg,
    Icon,
    Img,
    LoaderImg
  } from "./styles";

const ConfirmacionSuccess = () => {
  return (
    <CardContainer>
      <CardTopDecor src={TopDecor1} />
      <ContentContainer
        flexDirection="column"
        flexAlignItems="center"
        flexJustify="flex-start"
        margin="2rem"
      >
        <ContentContainer>
          <LoaderImg src={Loader} />
          <Img src={Loading} />
        </ContentContainer>
        <TitleH3 margin="2rem 0">Realizando transferencia...</TitleH3>
        <ContentContainer
          flexDirection="column"
          flexAlignItems="flex-start"
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

export default ConfirmacionSuccess;