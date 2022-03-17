import { useContext } from 'react'
import TransactionsContext from 'context/TransactionsContext'
import useMediaQuery from 'hooks/useMediaQuery'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import { StepperWrapper, WrapperTransactions } from './styles'

const StepperContainer = () => {
  const { step } = useContext(TransactionsContext)
  const isDesktop = useMediaQuery('(min-width: 550px)')

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      default:
        throw new Error('There is no more steps')
    }
  }

  return (
    <WrapperTransactions>
      <StepperWrapper activeStep={step - 1} orientation={isDesktop ? 'vertical' : 'horizontal'}>
        <Step>
          <StepLabel />
        </Step>
        <Step>
          <StepLabel />
        </Step>
        <Step>
          <StepLabel />
        </Step>
      </StepperWrapper>
      {showStep(step)}
    </WrapperTransactions>
  )
}

export default StepperContainer
