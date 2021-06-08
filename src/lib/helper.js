import api from './api';

export const fetchData = async (endpoint) => {
  let response = [];

  try {
    response = await api.get(endpoint);
  } catch (err) {
    console.log('Error caught with GET request:', err);
    return err;
  }

  return response.data;
};
