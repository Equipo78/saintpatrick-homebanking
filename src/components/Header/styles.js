import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'

export const HeaderStyled = styled.div`
  position: relative;
  grid-area: header;
  width: 100%;
  height: ${(props) => props.height};
  background-color: var(--primary);
`

export const Logo = styled.img`
  position: absolute;
  margin-left: 3.1rem;
  width: 4.4rem;
`

export const Menu = styled(MenuIcon)`
  color: #fff;
  display: none;
  visibility: none;
  opacity: 0;
  @media (max-width: 600px) {
    display: block;
    visibility: visible;
    opacity: 1;
    margin: 1rem 0 0 1rem;
  }
`
