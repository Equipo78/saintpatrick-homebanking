import StarEmpty from 'assets/icons_svg/StarEmpty.svg'
import StarFilled from 'assets/icons_svg/StarFilled.svg'
import Settings from 'assets/icons_svg/Settings.svg'
import Contact from 'assets/icons_svg/Contact.svg'

import { ContentContainer, PText, IconBg, Ul, Li, Icon } from './styles'

const Favoritas = ({ data, handleFav }) => {
  return (
    <Ul flexDirection="column" padding="0 2rem">
      {data.map((item) => (
        <Li key={item.id}>
          <ContentContainer
            flexAlignItems="center"
            flexJustify="space-between"
            margin="1rem"
            width="100%"
          >
            <ContentContainer flexAlignItems="center">
              <IconBg backgroundColor="rgba(247, 197, 72, 1)">
                <Icon src={Contact} />
              </IconBg>
              <ContentContainer flexAlignItems="flex-start" flexDirection="column">
                <PText margin="0 1rem">{item.name}</PText>
                <PText margin="0 1rem">{item.bank}</PText>
              </ContentContainer>
            </ContentContainer>
            <ContentContainer>
              <Icon cursor="pointer" src={item.fav ? StarFilled : StarEmpty} onClick={handleFav} />
              <Icon cursor="pointer" src={Settings} />
            </ContentContainer>
          </ContentContainer>
        </Li>
      ))}
    </Ul>
  )
}

export default Favoritas
