import axios from 'axios'

const BASE_USER_URL = 'http://localhost:8082/v1'

const userApi = axios.create({
  baseURL: BASE_USER_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

userApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default userApi
