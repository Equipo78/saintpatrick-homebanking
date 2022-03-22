import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export const HeaderStyled = styled.div`
  position: relative;
  grid-area: header;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height};
  background-color: var(--primary);
`

export const Logo = styled.img`
  position: absolute;
  margin-left: 3.1rem;
  width: 4.4rem;
  top: 0;
`

export const MenuContainer = styled.div``

export const Menu = styled(MenuIcon)`
  color: #fff;
  display: none;
  visibility: none;
  opacity: 0;
  @media (max-width: 600px) {
    display: block;
    visibility: visible;
    opacity: 1;
    margin: 0.5rem;
  }
`
export const Close = styled(CloseIcon)`
  color: #fff;
  display: none;
  visibility: none;
  opacity: 0;
  @media (max-width: 1000px) {
    display: block;
    visibility: visible;
    opacity: 1;
    margin: 0.5rem;
  }
`
