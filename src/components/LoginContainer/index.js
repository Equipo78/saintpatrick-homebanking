//  hooks
import { useState } from "react";
//  styles
import {
  Wrapper,
  Input,
  Form,
  Label,
  Adornament,
  Eye,
  LockImg,
  UserImg,
  Title,
  LoginTitle,
} from "./styles";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { MainButton, TextButton, Arrow } from "../Buttons/styles";

const LoginContainer = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Title>¡Hola! Te damos la bienvenida a nuestro Home Banking</Title>

      <Wrapper>
        <LoginTitle>Ingresá tus datos para comenzar</LoginTitle>

        <Form variant="outlined">
          <UserImg />
          <Label htmlFor="outlined-adornment-password">       Usuario
          </Label>
          <Input
            id="outlined-adornment-password"
            type="text"
            label="Usuarioooooooo"
          />
        </Form>

        <Form variant="outlined">
          <LockImg />
          <Label htmlFor="outlined-adornment-password">       Clave</Label>
          <Input
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <Adornament position="end">
                <Eye
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOffOutlined />
                  ) : (
                    <VisibilityOutlined />
                  )}
                </Eye>
              </Adornament>
            }
            label="Claveeeeeeee"
          />
        </Form>

        <MainButton width="100%">
          <TextButton>INICIAR SESION</TextButton>
          <Arrow />
        </MainButton>
      </Wrapper>
    </>
  );
};

export default LoginContainer;
