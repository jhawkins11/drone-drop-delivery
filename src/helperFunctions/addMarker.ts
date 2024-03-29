import axios from 'axios'

const addMarker = async (marker) => {
  try {
    const response = await axios.post(`/api/api/markers`, marker)
    if (response.status === 200) {
      return response.data
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export default addMarker
