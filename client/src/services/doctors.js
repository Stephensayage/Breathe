import api from './apiConfig'

export const getDoctors = async () => {
  try {
    const response = await api.get('/doctors')
    return response.data
  } catch (error) {
    throw error
  }
}