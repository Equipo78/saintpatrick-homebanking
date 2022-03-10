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
  TextBack,
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
      </BoxTransaction>
      <ContainerButton padleft="27rem">
        <TextBack onClick={() => setStep(1)}>Volver</TextBack>
        <MainButton width="8rem" onClick={() => setStep(3)}>
          <TextButton>CONTINUAR</TextButton>
        </MainButton>
      </ContainerButton>
    </ContainerTransactions>
  );
};

export default SecondStep;
