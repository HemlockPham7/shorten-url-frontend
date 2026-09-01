import axios from 'axios'
import { BASE_BOOKMARK_URL } from '@root/api/utils/basePath.ts'

const bookmarkApi = axios.create({
  baseURL: BASE_BOOKMARK_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

bookmarkApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default bookmarkApi
