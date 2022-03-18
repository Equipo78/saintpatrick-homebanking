import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const ConfirmacionGridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.9fr 0.1fr;
  grid-template-areas:
    'box-1'
    'box-2';
  gap: 2rem;
  padding: 1rem 3rem 0;
  min-width: 50%;
`

export const ConfirmacionCard = styled.div`
  grid-area: box-1;
`

export const ConfirmacionBtns = styled.div`
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
  background-color: ${(props) => props.backgroundColor};
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
`

export const PText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
`

export const IconBg = styled.div`
  width: 41px;
  height: 41px;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const IconImg = styled.img`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
`

export const Icon = styled(IconImg)``

const MainImg = styled.img`
  position: relative;
`

export const Img = styled(MainImg)``

export const ALink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LoaderAnimated = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoaderImg = styled.img`
  position: absolute;
  animation: ${LoaderAnimated} 1.2s linear infinite;
`
