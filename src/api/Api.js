import axios from 'axios'

const baseApi = axios.create({
  baseURL: 'http://localhost:8000/api'
})

const Api = function () {
  const token = localStorage.getItem('token')
  if (token) {
    baseApi.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  return baseApi
}

export default Api
