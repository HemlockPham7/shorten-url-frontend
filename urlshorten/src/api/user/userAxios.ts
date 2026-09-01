import axios from 'axios'
import { BASE_USER_URL } from '@root/api/utils/basePath.ts'

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
