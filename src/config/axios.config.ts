import axios from 'axios'

export const _AxiosService = axios.create({
  baseURL: 'http://localhost:5050/api/',
  timeout: 1000,
  headers: {
    common: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWY0ZjZhMWUzYmI1ZDZlMjAxOGY1YiIsImlhdCI6MTY2NzQ2ODU2MywiZXhwIjoxNjY3NDY5NDYzfQ.StmWbeFqKVbQ-iL8T5V1jedm_tI3c45b8XE5Iw4QU1c',
    },
  },
})
