//  context
import { useContext } from "react";
import TransactionsContext from "context/TransactionsContext";
//  styles
import {
  BoxTransaction,
  ContainerTransactions,
  TitleTransaction,
  ContainerButton,
  InputAmount,
  InputContainer,
  IconInput,
} from "./styles";
import { MainButton, TextButton } from "../Buttons/styles";
import { InputAdornment } from "@mui/material";

const SecondStep = () => {
  const { setStep } = useContext(TransactionsContext);

  return (
    <ContainerTransactions>
      <BoxTransaction>
        <TitleTransaction>¿Cuánto querés transferir?</TitleTransaction>

        <InputContainer>
          <IconInput>$</IconInput>
          <InputAmount
            id="outlined-adornment"
            placeholder="Ingresá el monto"
            endAdornment={<InputAdornment position="end">ARS</InputAdornment>}
          />
        </InputContainer>

        <ContainerButton>
          <MainButton width="8rem" onClick={() => setStep(3)}>
            <TextButton>CONTINUAR</TextButton>
          </MainButton>
        </ContainerButton>
      </BoxTransaction>
    </ContainerTransactions>
  );
};

export default SecondStep;
