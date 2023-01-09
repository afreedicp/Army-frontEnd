import axios from './axios';

const HomeApi = (successCB) => {
  return axios.get('/home').then((res) => {
    successCB(res.data);
    return res.data;
  });
};
export { HomeApi };
