import { ArrowForwardOutlined } from '@mui/icons-material'
import styled from 'styled-components'

export const MainButton = styled.button`
  cursor: pointer;
  display: flex;
  width: ${(props) => props.width};
  outline: none;
  border: none;
  padding: 1rem;
  background-color: var(--primary);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  align-items: center;
  color: #ffffff;
  // margin-top: 1rem;
  :hover {
    background-color: #008889;
  }
  @media (max-width: 350px) {
    width: 10rem;
  }
`

export const TextButton = styled.p`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  justify-content: center;
  width: 100%;
`

export const Arrow = styled(ArrowForwardOutlined)`
  color: var(--secondary);
`
