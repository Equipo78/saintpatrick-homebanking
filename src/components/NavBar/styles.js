import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarContainer = styled.nav`
  grid-area: navbar;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5rem 1rem 1rem;
  background-color: rgba(0, 87, 88, 0.03);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  min-width: 225px;
`

export const NavBarUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`

export const NavBarLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  cursor: pointer;
`

const NavBarImg = styled.img`
  width: 23px;
  height: 23px;
`

export const NavBarIcon = styled(NavBarImg)``

export const SpaceBreak = styled.div`
  height: 1rem;
`

export const PText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
`

export const ContentContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.flexAlignItems};
  justify-content: ${(props) => props.flexJustify};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`

export const ALink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`
