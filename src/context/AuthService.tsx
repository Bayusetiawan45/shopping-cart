import React, { createContext, ReactNode, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { _AxiosService } from '../config/axios.config'
import Cookie from 'js-cookie'

type AuthServiceProviderProps = {
  children: ReactNode
}

type AuthServiceContext = {
  handleLogin(data: LoginData): void
  handleLogout(): void
  handleRegister(data: RegisterData): void
  getUser(id: string): void
  user: any
}

export type LoginData = {
  email: string
  password: string
}

export interface RegisterData extends LoginData {
  name: string
}

export type UserData = {
  name: string
  email: string
}

const AuthServiceContext = createContext({} as AuthServiceContext)

export function useAuthService() {
  return useContext(AuthServiceContext)
}

export default function AuthServiceProvider({
  children,
}: AuthServiceProviderProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  const handleLogin = async (data: LoginData) => {
    try {
      const results = await _AxiosService.post('users/login', data)
      if (results.status === 200) {
        Cookie.set('refresh_token', results.data.refresh_token, {
          path: '/',
          expires: 7,
        })
        localStorage.setItem('user_login', 'isLoggin')
        localStorage.setItem('user_id', results.data.user.id)
        setTimeout(() => navigate('/'), 500)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = () => {
    localStorage.setItem('user_login', 'isLoggout')
  }

  const handleRegister = async (data: LoginData) => {
    try {
      const results = await _AxiosService.post('users/register', data)
      if (results.status === 200) {
        navigate('/login')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getUser = async (id: string) => {
    try {
      const results = await _AxiosService.get(`/users/${id}`)
      if (results.status === 200) {
        setUser(results.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthServiceContext.Provider
      value={{ handleLogin, handleLogout, getUser, user, handleRegister }}
    >
      {children}
    </AuthServiceContext.Provider>
  )
}
