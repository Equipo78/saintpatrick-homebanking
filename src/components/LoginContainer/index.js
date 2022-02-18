//  hooks
import { useState } from "react";
//  components
import ButtonArrow from "components/Buttons/ButtonArrow";
//  styles
import { Wrapper, Input, Form, Label, Adornament, Eye, Lock, CreditCard, Title, LoginTitle } from "./styles";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

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
          <CreditCard />
          <Label htmlFor="outlined-adornment-password">      Ingresá el número de tarjeta</Label>
          <Input
            id="outlined-adornment-password"
            type="text"
            label="Ingresá el número de tarjetaasdas"
          />
        </Form>

        <Form variant="outlined">
          <Lock />
          <Label htmlFor="outlined-adornment-password">      Ingresá el PIN</Label>
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
            label="Ingresá el PINasdas"
          />
        </Form>

        <ButtonArrow text="INICIAR SESION" />
      </Wrapper>
    </>
  );
};

export default LoginContainer;
