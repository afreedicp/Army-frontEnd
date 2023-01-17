import axios from './axios';

const HomeApi = (successCB) => {
  return axios.get('/first').then((res) => {
    successCB(res.data);
    return res.data;
  });
};
export { HomeApi };
