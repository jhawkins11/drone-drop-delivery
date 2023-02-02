import axios from 'axios';

const fetchMarkers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}api/markers`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Security-Policy': 'upgrade-insecure-requests',
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchMarkers;
