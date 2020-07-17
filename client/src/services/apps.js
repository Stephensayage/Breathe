import api from './apiConfig'

export const getApps = async () => {
  try {
    const response = await api.get('/apps')
    return response.data
  } catch (error) {
    throw error
  }
}