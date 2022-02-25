import { OutlinedInput, Stepper, TextField } from "@mui/material";

const { default: styled } = require("styled-components");

export const WrapperTransactions = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const ContainerTransactions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 100%;
`;

export const BoxTransaction = styled.div`
  position: relative;
  max-width: 623px;
  height: auto;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 1px 12px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

export const TitleTransaction = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.4rem 2rem;
`;

export const ContainerButton = styled.div`
  position: absolute;
  bottom: -4rem;
  right: 0;
`;

export const StepperWrapper = styled(Stepper)`
  flex: 0.3;
  align-items: center;
  height: 20rem;
  .MuiSvgIcon-root {
    width: 40px;
    height: 40px;
  }
  .MuiSvgIcon-root.Mui-active,
  .MuiSvgIcon-root.Mui-completed {
    color: var(--primary);
  }
  .MuiStepConnector-line {
    height: 100%;
    border-left-width: 5px;
    margin-right: 20px;
  }
`;

//  first step
export const InputCBU = styled(TextField)`
  border-radius: 8px;
  padding-left: 2rem;
  background-color: #ffffff;
  margin: 1rem 0 3.5rem 2rem !important;
  width: 55%;
`;

//  second step
export const InputAmount = styled(OutlinedInput)`
  border-radius: 8px;
  background-color: #ffffff;
  width: 55%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 3.5rem 2rem !important;
`;

export const IconInput = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.9rem;
  margin-right: 1.2rem;
`;
