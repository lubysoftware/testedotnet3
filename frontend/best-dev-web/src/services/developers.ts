/* eslint-disable no-dupe-keys */
import api from './api';


const getDevelopers = () => {
  return api.get(`developers`);
};
const find = (id: number) => {
  return api.get(`developers/${id}`);
};
export default {
  getDevelopers,
  find,
};
