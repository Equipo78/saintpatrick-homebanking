import styled from 'styled-components'

export const HistorialGridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'box-1';
  gap: 0;
  padding: 2rem 3rem;
  min-width: 50%;
`

export const HistorialArea = styled.div`
  grid-area: box-1;
`

export const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #e2e2e2;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 1px 12px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${(props) => props.padding};
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
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`

export const PText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`

export const Ul = styled.ul`
  width: 100%;
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

export const Line = styled.div`
  border-top: ${(props) => props.border};
  width: 100%;
`
