import axios from 'axios'
import { BASE_LINK_URL } from '@root/api/utils/basePath.ts'

const linkApi = axios.create({
  baseURL: BASE_LINK_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default linkApi
