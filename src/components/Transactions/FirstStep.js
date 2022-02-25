//  context
import { useContext } from "react";
import TransactionsContext from "context/TransactionsContext";
//  styles
import {
  BoxTransaction,
  ContainerTransactions,
  TitleTransaction,
  ContainerButton,
  InputCBU,
} from "./styles";
import { MainButton, TextButton } from "../Buttons/styles";

function FirstStep() {
  const { setStep } = useContext(TransactionsContext);

  return (
    <ContainerTransactions>
      <BoxTransaction>
        <TitleTransaction>Agregar una cuenta</TitleTransaction>
        <InputCBU id="outlined-basic" label="Ingresá el número de CBU" />

        <ContainerButton>
          <MainButton width="8rem" onClick={() => setStep(2)}>
            <TextButton>CONTINUAR</TextButton>
          </MainButton>
        </ContainerButton>

      </BoxTransaction>
    </ContainerTransactions>
  );
}

export default FirstStep;