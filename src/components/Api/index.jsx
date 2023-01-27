import axios from './axios';
let config = {
  headers: {
    forNest: 'forNest',
  },
};
const HomeApi = (successCB) => {
  return axios.get('/story').then((res) => {
    successCB(res.data);
    return res.data;
  });
};
const addStory = (data, successCB) => {
  return axios.post('/story/addStory', data).then((res) => {
    successCB(res.data);
    return res.data;
  });
};
const deleteStory = (successCB) => {
  return axios.delete('/story/:id').then((res) => {
    successCB(res.data);
    return res.data;
  });
};
export { HomeApi, addStory, deleteStory };
