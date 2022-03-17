import { useState } from 'react'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'

import { MainButton, TextButton, Arrow } from '../Buttons/styles'

import {
  Label,
  Adornament,
  Eye,
  Form,
  Input,
  LockImg,
  LoginTitle,
  UserImg,
  Wrapper,
} from './styles'

const LoginContainer = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Wrapper>
      <LoginTitle>Ingresá tus datos para comenzar</LoginTitle>

      <Form variant="outlined">
        <UserImg />
        <Label htmlFor="outlined-adornment-password">Usuario</Label>
        <Input id="outlined-adornment-password" label="Usuarioooooooo" type="text" />
      </Form>

      <Form variant="outlined">
        <LockImg />
        <Label htmlFor="outlined-adornment-password"> Clave</Label>
        <Input
          endAdornment={
            <Adornament position="end">
              <Eye
                aria-label="toggle password visibility"
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
              </Eye>
            </Adornament>
          }
          id="outlined-adornment-password"
          label="Claveeeeeeee"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
        />
      </Form>

      <MainButton width="100%">
        <TextButton>INICIAR SESION</TextButton>
        <Arrow />
      </MainButton>
    </Wrapper>
  )
}

export default LoginContainer
