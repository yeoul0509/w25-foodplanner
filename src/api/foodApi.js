import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/foods',
})

export const getFoodList = async () => {
  const res = await api.get(``)
  return res.data
}

export const getFoodDetail = async (id) => {
  const res = await api.get(`/${id}`)
  return res.data
}