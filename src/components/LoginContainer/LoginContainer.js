import { useState } from 'react'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks/useAuth'

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
  const navigate = useNavigate()
  const { login } = useAuth()
  const [user, setUser] = useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }

  const handleClickShowPassword = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      axios
        .post('https://app-bancaria.herokuapp.com/auth/login', {
          email: user.email,
          password: user.password,
        })
        .then((res) => {
          login(res)
          navigate('/')
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <LoginTitle>Ingresá tus datos para comenzar</LoginTitle>

      <form onSubmit={handleSubmit}>
        <Form variant="outlined">
          <UserImg />
          <Label htmlFor="outlined-adornment-password">Usuario</Label>
          <Input
            id="outlined-adornment-password"
            label="Usuarioooooooo"
            name="email"
            type="text"
            onChange={handleChange}
          />
        </Form>

        <Form variant="outlined">
          <LockImg />
          <Label htmlFor="outlined-adornment-password">Clave</Label>
          <Input
            endAdornment={
              <Adornament position="end">
                <Eye
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {user.showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                </Eye>
              </Adornament>
            }
            id="outlined-adornment-password"
            label="Claveeeeeeee"
            name="password"
            type={user.showPassword ? 'text' : 'password'}
            value={user.password}
            onChange={handleChange}
          />
        </Form>

        <MainButton width="100%">
          <TextButton>INICIAR SESION</TextButton>
          <Arrow />
        </MainButton>
      </form>
    </Wrapper>
  )
}

export default LoginContainer
