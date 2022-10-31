import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../components/atoms/button'
import { ContainerCenter } from '../components/atoms/container'
import { FlexForm } from '../components/atoms/flex'
import { CustomText } from '../components/atoms/typography'
import { useAuthService } from '../context/AuthService'

export default function Login() {
  const loginState = {
    email: '',
    password: '',
  }
  const [loginData, setLoginData] = useState(loginState)
  const { handleLogin } = useAuthService()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    handleLogin(loginData)
  }

  return (
    <ContainerCenter>
      <FlexForm>
        <CustomText fsize={26} fweight={900} margin="0 0 15px 0">
          Login
        </CustomText>
        <TextField
          color="secondary"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          size="small"
          onChange={handleChange}
        />
        <TextField
          color="secondary"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          size="small"
          margin="normal"
          onChange={handleChange}
        />
        <CustomButton
          variant="contained"
          color="secondary"
          label="Login"
          type="submit"
          style={{ marginTop: '20px' }}
          onClick={handleSubmit}
        />
        <CustomText fsize={12} color="#8F90A6" margin="10px 0">
          Dont have an account? Register
        </CustomText>
      </FlexForm>
    </ContainerCenter>
  )
}
