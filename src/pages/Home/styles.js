import styled from 'styled-components'

export const HomeGridLayout = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  grid-template-rows: 0.2fr 0.2fr 0.6fr;
  grid-template-areas:
    'top top'
    'box-1 box-2'
    'box-3 box-2';
  gap: 3rem;
  padding: 1rem 3rem 0;
  width: 100%;
`

export const HomeInfo = styled.div`
  grid-area: top;
`

export const HomeSaldo = styled.div`
  grid-area: box-1;
`

export const HomeMovimientos = styled.div`
  grid-area: box-2;
`

export const HomeAcciones = styled.div`
  grid-area: box-3;
`

export const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #e2e2e2;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 1px 12px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
`

export const TitleH3 = styled.h3`
  margin: 0;
`

export const CardImg = styled.img`
  position: absolute;
  max-height: 100%;
  width: 100%;
`

export const CardTopDecor = styled(CardImg)``

export const CardWrapper = styled.div`
  margin: ${(props) => props.margin};
`

export const ContentContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.flexAlignItems};
  justify-content: ${(props) => props.flexJustify};
  gap: ${(props) => props.gap};
`

export const PText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.flexAlignItems};
  list-style-type: none;
  gap: ${(props) => props.gap};
  margin: 0;
  padding: ${(props) => props.padding};
  text-align: center;
`

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const IconBg = styled.div`
  width: 41px;
  height: 41px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const HomeImg = styled.img`
  width: 23px;
  height: 23px;
`

export const Icon = styled(HomeImg)``
