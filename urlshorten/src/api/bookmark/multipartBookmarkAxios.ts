import axios from 'axios'
import { BASE_BOOKMARK_URL } from '@root/api/utils/basePath.ts'

const multipartBookmarkApi = axios.create({
  baseURL: BASE_BOOKMARK_URL,
})

multipartBookmarkApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default multipartBookmarkApi
