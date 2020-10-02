/* eslint-disable no-dupe-keys */
import api from './api';


const getDevelopers = () => {
  return api.get(`developers`);
};

export default {
  getDevelopers,
};
