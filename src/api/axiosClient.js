import axios from 'axios'
import queryString from 'query-string'
import { API_URL } from '../constants/appConstants'

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': `${localStorage.getItem('token-user')}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

// axiosClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token-user')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    // Handle errors
    console.log(error.response)
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }

    if (error.response.status === 401) {
      localStorage.clear()
      window.location = '/'
    } else {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  },
)

export default axiosClient
