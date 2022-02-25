//  styles
import {
  BoxTransaction,
  ContainerTransactions,
  TitleTransaction,
  ContainerButton,
} from "./styles";
import { MainButton, TextButton } from "../Buttons/styles";

const ThirdStep = () => {
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

        <ContainerButton>
          <MainButton width="15rem">
            <TextButton>CONFIRMAR TRANSFERENCIA</TextButton>
          </MainButton>
        </ContainerButton>
      </BoxTransaction>
    </ContainerTransactions>
  );
};

export default ThirdStep;
