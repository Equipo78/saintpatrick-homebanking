import { useContext } from 'react'
import TransactionsContext from 'context/TransactionsContext'

import { MainButton, TextButton } from '../Buttons/styles'

import {
  BoxTransaction,
  ContainerTransactions,
  TitleTransaction,
  ContainerButton,
  InputCBU,
} from './styles'

function FirstStep() {
  const { setStep } = useContext(TransactionsContext)

  return (
    <ContainerTransactions>
      <BoxTransaction>
        <TitleTransaction>Agregar una cuenta</TitleTransaction>
        <InputCBU id="outlined-basic" label="Ingresá el número de CBU" />
      </BoxTransaction>

      <ContainerButton padleft="32rem">
        <MainButton width="8rem" onClick={() => setStep(2)}>
          <TextButton>CONTINUAR</TextButton>
        </MainButton>
      </ContainerButton>
    </ContainerTransactions>
  )
}

export default FirstStep
