import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = process.env.REACT_APP_APP_ID;

const getUsers = () => {
  return axios.get(`${BASE_URL}/user`, {
    headers: {
      'app-id': APP_ID
    }
  });
};

export default {
  getUsers
};