import axios from 'axios'

const BASE_BOOKMARK_URL = 'http://localhost:8081/v1'

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
