/* eslint-disable no-dupe-keys */
import api from './api';


const getRanking = () => {
  return api.get(`ranking`);
};

export default {
  getRanking,
};
