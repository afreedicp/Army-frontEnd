import axios from './axios';

const HomeApi = () => {
  return axios.get('/story').then((res) => {
    return res;
  });
};
const getStory = (id) => {
  return axios.get(`/story/${id}`).then((res) => {
    return res;
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
    return res;
  });
};
const updateStory = (id, data) => {
  console.log('maa');
  return axios.patch(`/story/${id}`, data).then((res) => {
    return res;
  });
};
export { HomeApi, addStory, deleteStory, getStory, updateStory };
