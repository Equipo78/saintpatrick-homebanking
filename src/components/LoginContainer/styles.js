import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import styled from "styled-components";
import userpng from 'assets/background-login/user.png'
import lockpng from 'assets/background-login/lock.png'

export const Title = styled.h1`
  position: absolute;
  top: 8rem;
  left: 10rem;
  width: 50rem;
  font-family: "Bona Nova", serif;
  font-weight: 400;
  font-size: 3.7rem;
  @media (max-width: 1570px) {
    width: 35rem;
  }
  @media (max-width: 1315px) {
    left: 3rem;
    width: 75%;
  }
  @media (max-width: 720px) {
font-size: 3rem;
  }
  @media (max-width: 500px) {
    display: none;
  }
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
  margin: auto 10rem auto 0;
  @media (max-width: 1315px) {
    margin: auto 3rem auto 0;
  }
  @media (max-width: 965px) {
    margin: auto;
    top: 8rem;
    left: 0;
  }
  @media (max-width: 500px) {
    margin: auto 1rem;
    top: 2rem;
  }
`;

export const LoginTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 2rem;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const Form = styled(FormControl)`
  width: 100%;
  margin-bottom: 1rem !important;
`;

export const LockImg = styled.div`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: .9rem;
  width: 20px;
  height: 20px;
  background: url(${lockpng}) no-repeat;
`;

export const UserImg = styled.div`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: .8rem;
  width: 20px;
  height: 20px;
  background: url(${userpng});
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
