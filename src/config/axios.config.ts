import axios from 'axios'

export const _AxiosService = axios.create({
  baseURL: 'http://localhost:5050/api/',
  timeout: 1000,
})
