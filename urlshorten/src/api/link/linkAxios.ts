import axios from 'axios'

const BASE_LINK_URL = 'http://localhost:8081/v1'

const linkApi = axios.create({
  baseURL: BASE_LINK_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default linkApi
