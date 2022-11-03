import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Background from '../components/atoms/background'
import { CustomButton } from '../components/atoms/button'
import { ContainerCenter } from '../components/atoms/container'
import { FlexForm } from '../components/atoms/flex'
import { CustomText } from '../components/atoms/typography'
import { useAuthService } from '../context/AuthService'

export default function Register() {
  const loginState = {
    name: '',
    email: '',
    password: '',
  }
  const [registerData, setRegisterData] = useState(loginState)
  const { handleRegister } = useAuthService()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    handleRegister(registerData)
  }

  return (
    <Background>
      <ContainerCenter>
        <FlexForm>
          <CustomText
            fsize={26}
            fweight={900}
            color="black"
            margin="0 0 15px 0"
          >
            Register
          </CustomText>
          <TextField
            color="secondary"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            type="text"
            size="small"
            onChange={handleChange}
          />
          <TextField
            color="secondary"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            size="small"
            margin="normal"
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
            onChange={handleChange}
          />
          <CustomButton
            variant="contained"
            color="secondary"
            label="Register"
            type="submit"
            style={{ marginTop: '20px' }}
            onClick={handleSubmit}
          />
          <CustomText fsize={12} color="#8F90A6" margin="10px 0">
            Already have an account? Login
          </CustomText>
        </FlexForm>
      </ContainerCenter>
    </Background>
  )
}
