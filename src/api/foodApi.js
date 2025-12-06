import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/foods',
})

export const getSongList = async () => {
  const res = await api.get(``)
  return res.data
}

export const getSongDetail = async (id) => {
  const res = await api.get(`/${id}`)
  return res.data
}