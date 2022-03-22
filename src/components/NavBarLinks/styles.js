import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'

export const NavBarContainer = styled.nav`
  grid-area: navbar;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1rem 1rem;
  background-color: rgba(0, 87, 88, 0.03);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  @media (max-width: 1000px) {
    display: ${(props) => props.display};
    flex-direction: column;
    // position: absolute;
    // top: 0;
    // left: 0;
    padding: 2rem 0;
    overflow: hidden;
    overflow-y: hidden;
    background-color: #005758;
    align-items: center;
    color: #fff;
    width: 100%;
    height: 100%;
    z-index: 9999;
    font-size: 1rem;
    visibility: ${(props) => props.visibility};
  }
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

export const NavBarIcon = styled(NavBarImg)`
  filter: invert(1);
`

export const SpaceBreak = styled.div`
  height: 1rem;
`

export const PText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  @media (max-width: 1000px) {
    font-size: inherit;
  }
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
  color: inherit;
  text-decoration: none;
  @media (max-width: 1000px) {
    color: #fff;
    text-decoration: none;
  }
`
