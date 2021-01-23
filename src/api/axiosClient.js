import axios from 'axios'
import queryString from 'query-string'
import { API_URL } from '../constants/appConstants'

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': `${localStorage.getItem('token-user')}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token-user')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    // Handle errors
    throw error
  },
)

export default axiosClient
