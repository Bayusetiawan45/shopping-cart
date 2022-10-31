import React, { createContext, ReactNode, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { _AxiosService } from '../config/axios.config'
import Cookie from 'js-cookie'

type AuthServiceProviderProps = {
  children: ReactNode
}

type AuthServiceContext = {
  handleLogin(data: LoginData): void
}

export type LoginData = {
  email: string
  password: string
}

const AuthServiceContext = createContext({} as AuthServiceContext)

export function useAuthService() {
  return useContext(AuthServiceContext)
}

export default function AuthServiceProvider({
  children,
}: AuthServiceProviderProps) {
  const navigate = useNavigate()

  const handleLogin = async (data: LoginData) => {
    try {
      const results = await _AxiosService.post('users/login', data)
      if (results.status === 200) {
        Cookie.set('refresh_token', results.data.refresh_token, {
          path: '/',
          expires: 7,
        })
        localStorage.setItem('user_login', 'isLoggin')
        setTimeout(() => navigate('/'), 500)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <AuthServiceContext.Provider value={{ handleLogin }}>
      {children}
    </AuthServiceContext.Provider>
  )
}
