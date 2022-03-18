import { Suspense, lazy } from 'react'
import ConfirmacionLoading from 'components/Confirmacion/ConfirmacionLoading'

import {
  ConfirmacionGridLayout,
  ConfirmacionCard,
  ConfirmacionBtns,
  CardContainer,
  ContentContainer,
  PText,
  ALink,
} from './styles'

const ConfirmacionSuccess = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../components/Confirmacion/ConfirmacionSuccess')), 1200)
  })
})

const Confirmacion = () => {
  return (
    <ConfirmacionGridLayout>
      <ConfirmacionCard>
        <Suspense fallback={<ConfirmacionLoading />}>
          <ConfirmacionSuccess />
        </Suspense>
      </ConfirmacionCard>
      <ConfirmacionBtns>
        <ContentContainer flexAlignItems="center" flexJustify="flex-end" gap="1rem">
          <ALink to="/">
            <PText color="#005758" cursor="pointer" weight="600">
              Volver al Inicio
            </PText>
          </ALink>
          <ContentContainer cursor="pointer" flexAlignItems="center" flexJustify="center">
            <CardContainer backgroundColor="#005758">
              <PText color="#fff" margin="1rem">
                VER COMPROBANTE
              </PText>
            </CardContainer>
          </ContentContainer>
        </ContentContainer>
      </ConfirmacionBtns>
    </ConfirmacionGridLayout>
  )
}

export default Confirmacion
