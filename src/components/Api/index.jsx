import axios from 'axios';

// const api = axios.create({ baseUrl: process.env.BASEURL });
const HomeApi = (successCB) => {
  return axios.get('/home').then((res) => {
    successCB(res.data);
    return res.data;
  });
};
export { HomeApi };
