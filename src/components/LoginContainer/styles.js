import {
  LockOutlined,
  CreditCardOutlined,
  ArrowForwardOutlined,
} from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import styled from "styled-components";

export const Title = styled.h1`
  position: absolute;
  top: 8rem;
  left: 5rem;
  width: 50rem;
  font-family: "Bona Nova", serif;
  font-weight: 400;
  font-size: 3.7rem;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  max-width: 27rem;
  max-height: 25rem;
  background: #e6efef;
  border-radius: 3.1rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 63px 45px;
  margin: auto 3.3rem auto 0;
`;

export const LoginTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 2rem;
`;

export const Form = styled(FormControl)`
  width: 100%;
  margin-bottom: 1rem !important;
`;

export const Lock = styled(LockOutlined)`
  z-index: 10;
  position: absolute;
  top: 0.9rem;
  left: 0.5rem;
  color: #767676 !important;
`;

export const CreditCard = styled(CreditCardOutlined)`
  z-index: 10;
  position: absolute;
  top: 0.9rem;
  left: 0.5rem;
  color: #767676 !important;
`;

export const Label = styled(InputLabel)`
  white-space: pre-wrap !important;
`;

export const Adornament = styled(InputAdornment)``;

export const Eye = styled(IconButton)`
  color: #767676 !important;
  font-weight: 100 !important;
`;

export const Input = styled(OutlinedInput)`
  position: relative;
  border-radius: 8px !important;
  padding-left: 2rem !important;
  background-color: #ffffff;
`;

