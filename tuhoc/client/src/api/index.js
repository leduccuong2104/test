import axios from 'axios';

const URL = 'http://localhost:5000';

export const signIn = (payload) => {
   return axios.post(`${URL}/user/signIn`, payload)
}
export const signUp = (payload) => {
   return axios.post(`${URL}/user/signUp`, payload)
}

export const createGoods = (payload) => {
   return axios.post(`${URL}/goods/createGoods`, payload)
}

export const getDataGoods = () => {
   return axios.get(`${URL}/goods/getDataGoods`)
}

export const editDataGoods = (payload) => {
   return axios.get(`${URL}/goods/editDataGoods/${payload}`)
}

export const createClients = (payload) => {
   return axios.post(`${URL}/clients/createClients`, payload)
}

export const getDataClients = () => {
   return axios.get(`${URL}/clients/getDataClients`)
}