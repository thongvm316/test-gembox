import axios from 'axios'
import queryString from 'query-string'
import { API_URL } from '../constants/appConstants'

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': `${localStorage.getItem('token-user')}`,
    // 'X-Auth-Token': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc0FkbWluIjowLCJzdWIiOjYyLCJleHAiOjE2MTEyMTY1NjF9.uzZfg0hGeoaCph3oHT0zNV_CkMr8npK1bw9ELsVpVEg`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token-user')
  if (token) {
    axios.defaults.headers.common['X-Auth-Token'] = token
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
    if (
      error.response.status === 401 &&
      error.response.data.data.message === 'Token has expired'
    ) {
      localStorage.clear()
      window.location = '/'
    } else {
      throw error
    }
  },
)

export default axiosClient
