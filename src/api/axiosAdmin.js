import axios from 'axios'
import queryString from 'query-string'
import { API_URL } from '../constants/appConstants'

const axiosAdmin = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

axiosAdmin.interceptors.request.use((request) => {
  const token = localStorage.getItem('token')
  if (token) {
    request.headers['X-Auth-Token'] = token
  }

  return request
})

axiosAdmin.interceptors.response.use(
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

export default axiosAdmin
