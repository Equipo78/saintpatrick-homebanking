import { CircularProgress } from '@mui/material'
import styled from 'styled-components'

export const BoxLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`

export const Loading = styled(CircularProgress)`
  color: var(--primary) !important;
  width: 4rem !important;
  height: 4rem !important;
`
