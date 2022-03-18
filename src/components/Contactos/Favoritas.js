import React from 'react'
import StarEmpty from "../../assets/icons_svg/StarEmpty.svg";
import StarFilled from "../../assets/icons_svg/StarFilled.svg";
import Settings from "../../assets/icons_svg/Settings.svg";
import Contact from "../../assets/icons_svg/Contact.svg";
import {
  ContentContainer,
  PText,
  IconBg,
  Ul,
  Li,
  Icon,
} from "./styles";

const Favoritas = ({ data, handleFav }) => {

  return (
    <Ul flexDirection="column" padding="0 2rem">
      {data.map((item) => (
        <Li key={item.id}>
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
                <PText margin="0 1rem">{item.name}</PText>
                <PText margin="0 1rem">{item.bank}</PText>
              </ContentContainer>
            </ContentContainer>
            <ContentContainer>
              <Icon src={item.fav ? StarFilled : StarEmpty} cursor="pointer" onClick={handleFav}/>
              <Icon src={Settings} cursor="pointer"/>
            </ContentContainer>
          </ContentContainer>
        </Li>
      ))}
    </Ul>
  )
}

export default Favoritas