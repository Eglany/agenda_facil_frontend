import axios from 'axios';

const HOST = 'localhost';
const PORT = 3001;

const connection = axios.create({
  baseURL: `http://${HOST}:${PORT}`,
});

export const requestLogin = async (email, password) => {
  const { data } = await connection.post('/company/login', { email, password });

  return data;
};

export const requestSchedules = async (token) => {
  const { data } = await connection.request({
    method: 'GET',
    url: '/company/schedules',
    headers: {
      Authorization: token,
    },
  });

  return data;
};

export const requestServices = async (token) => {
  const { data } = await connection.request({
    method: 'GET',
    url: '/company/my-services',
    headers: {
      Authorization: token,
    },
  });

  return data;
};

export default connection;
