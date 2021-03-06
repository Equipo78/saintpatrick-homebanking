import styled from 'styled-components'

export const TransaccionesCuenta = styled.div`
  grid-area: box-1;
`

export const TransaccionesUltimas = styled.div`
  grid-area: box-2;
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
  margin: ${(props) => props.margin};
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
  cursor: ${(props) => props.cursor};
  @media (max-width: 600px) {
    // width: 100%;
    font-size: 12px;
    gap: 0;
  }
`

export const PText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  @media (max-width: 600px) {
    padding: 0.3rem 0;
    width: 100%;
    text-aling: left;
  }
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
  @media (max-width: 600px) {
    padding: 1rem;
    width: 100%;
  }
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
  @media (max-width: 600px) {
    padding: 1rem;
    width: 34px;
    height: 34px;
  }
`

const HomeImg = styled.img`
  width: auto;
  height: auto;
`

export const Icon = styled(HomeImg)`
  cursor: ${(props) => props.cursor};
`

export const Line = styled.div`
  border-top: ${(props) => props.border};
  width: 100%;
`
