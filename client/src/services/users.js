import api from './apiConfig'


export const getUser = async id => {
  try {
      const response = await api.get(`/users/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createUser = async product => {
  try {
      const response = await api.post('/users', user)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateUser = async (id, user) => {
  try {
      const response = await api.put(`/users/${id}`, product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteProduct = async id => {
  try {
      const response = await api.delete(`/products/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}