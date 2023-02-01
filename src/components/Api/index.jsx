import axios from './axios';

const HomeApi = () => {
  return axios.get('/story').then((res) => {
    return res.data;
  });
};
const addStory = (data) => {
  return axios.post('/story/addStory', data).then((res) => {
    return res;
  });
};
const deleteStory = (successCB) => {
  return axios.delete('/story/:id').then((res) => {
    successCB(res.data);
    return res.data;
  });
};
export { HomeApi, addStory, deleteStory };
