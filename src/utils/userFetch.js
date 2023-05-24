import axios from 'axios';

const HOST = 'localhost';
const PORT = 3001;

const connection = axios.create({
  baseURL: `http://${HOST}:${PORT}`,
});

export const requestLogin = async (email, password) => {
  const { data } = await connection.post('/user/login', { email, password });

  return data;
};

export const requestSchedules = async (token) => {
  const { data } = await connection.request({
    method: 'GET',
    url: '/user/schedules',
    headers: {
      Authorization: token,
    },
  });
  return data;
};

export const requestFavoriteCompanies = async (token) => {
  const { data } = await connection.request({
    method: 'GET',
    url: '/user/my-companies',
    headers: {
      Authorization: token,
    },
  });
  return data;
};

export const requestAllServicesByCompany = async (token, id) => {
  const { data } = await connection.request({
    method: 'GET',
    url: `/user/my-companies/${id}/services`,
    headers: {
      Authorization: token,
    },
  });
  return data;
};

export const requestAvailableSchedueles = async (token, companyId, serviceId, date) => {
  const { data } = await connection.request({
    method: 'POST',
    url: '/user/available-schedules',
    headers: {
      Authorization: token,
    },
    data: { companyId, serviceId, date },
  });
  return data;
};

export const requestCreateNewSchedule = async (token, companyId, serviceId, date, hour) => {
  const { data } = await connection.request({
    method: 'POST',
    url: '/user/schedules',
    headers: {
      Authorization: token,
    },
    data: {
      companyId, serviceId, date, hour,
    },
  });
  return data;
};

export default connection;
