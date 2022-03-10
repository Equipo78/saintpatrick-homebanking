//  styles
import {
  BoxTransaction,
  ContainerTransactions,
  TitleTransaction,
  ContainerButton,
  TextBack,
} from "./styles";
import { MainButton, TextButton } from "../Buttons/styles";
import { useContext } from "react";
import TransactionsContext from "context/TransactionsContext";

const ThirdStep = () => {
  const { setStep } = useContext(TransactionsContext);

  return (
    <ContainerTransactions>
      <BoxTransaction>
        <TitleTransaction>Confirma la operación</TitleTransaction>

        {/* <TitleData>Estás por transferir $2.000 a la siguiente cuenta:</TitleData>
        <ContainerDataTransaction>
          <DataUser>
            <Icon />
            <DataText>Susana Silvia Estevez</DataText>
          </DataUser>
          <DataUser>
            <Icon />
            <DataText>CBU: 5595 3458 9989 7125 </DataText>
          </DataUser>
          <DataUser>
            <Icon />
            <DataText>Cuenta Banco Río</DataText>
          </DataUser>
        </ContainerDataTransaction> */}
      </BoxTransaction>
      <ContainerButton padleft='20rem'>
        <TextBack onClick={() => setStep(2)}>Volver</TextBack>
        <MainButton width="15rem">
          <TextButton>CONFIRMAR TRANSFERENCIA</TextButton>
        </MainButton>
      </ContainerButton>
    </ContainerTransactions>
  );
};

export default ThirdStep;
