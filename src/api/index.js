import axios from 'axios';

const utils = {
  apiKey: `api-key=${process.env.REACT_APP_API_SECRET}`,
  baseUrl: process.env.REACT_APP_API_URL || '',
};

export const getCritics = () => {
  return axios.get(`${utils.baseUrl}/critics/all.json?${utils.apiKey}`);
}
