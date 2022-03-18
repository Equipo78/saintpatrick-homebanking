import { OutlinedInput, Stepper, TextField } from "@mui/material";
import { Link } from "react-router-dom";


const { default: styled } = require("styled-components");

export const WrapperTransactions = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-right: 1rem;
  @media (max-width: 550px) {
    flex-direction: column;
    margin: 4rem 1.5rem 0 1.5rem;
  }
`;

export const ContainerTransactions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  @media (max-width: 550px) {
  }
`;

export const BoxTransaction = styled.div`
  max-width: 40rem;
  height: auto;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 1px 12px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  @media (max-width: 550px) {
    box-shadow: none;
  }
`;

export const TitleTransaction = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.4rem 2rem;
  @media (max-width: 550px) {
    border-bottom: none;
    padding: 1.4rem 0;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.padleft};
  @media (max-width: 830px) {
    padding-left: 0 !important;
    justify-content: end;
  }
  @media (max-width: 550px) {
    height: 100%;
    align-items: flex-end;
    margin-bottom: 2rem;
  }
`;

export const TextBack = styled.h3`
  cursor: pointer;
  color: var(--primary);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding: 1rem 2rem 0 0;
  @media (max-width: 550px) {
    padding-top: 0 !important;
    padding-bottom: 0.7rem;
  }
`;

export const StepperWrapper = styled(Stepper)`
  flex: 0.3;
  align-items: center;
  height: 20rem;
  .MuiSvgIcon-root {
    width: 45px;
    height: 45px;
  }
  .MuiSvgIcon-root.Mui-active,
  .MuiSvgIcon-root.Mui-completed {
    color: var(--primary);
  }
  .MuiStepConnector-line {
    height: 100%;
    border-top-width: 5px;
    border-left-width: 5px;
    margin-right: 20px;
  }
  @media (max-width: 550px) {
    .MuiStepConnector-line {
      margin-right: 0 !important;
    }
  }
`;

//  first step
export const InputCBU = styled(TextField)`
  border-radius: 8px;
  padding-left: 2rem;
  background-color: #ffffff;
  margin: 1rem 0 3.5rem 2rem !important;
  width: 55%;
  @media (max-width: 550px) {
    width: 100%;
    margin: 0 !important;
  }
`;

//  second step
export const InputAmount = styled(OutlinedInput)`
  border-radius: 8px;
  background-color: #ffffff;
  width: 55%;
  @media (max-width: 550px) {
    width: 100%;
    margin: 0 !important;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 3.5rem 2rem !important;
  @media (max-width: 550px) {
    margin: 0 !important;
  }
`;

export const IconInput = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.9rem;
  margin-right: 1.2rem;
`;

export const ALink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`
