/* eslint-disable no-dupe-keys */
import api from './api';

const createDeveloper = (name: string) => {
  return api.post(`developers`, { name });

}
const getDevelopers = () => {
  return api.get(`developers`);
};
const find = (id: number) => {
  return api.get(`developers/${id}`);
};
const setWorkedHours = (devId: number, projectId: number, workedTime: number) => {
  return api.put(`developers/${devId}/projects/${projectId}`, { workedTimeInMiliseconds: workedTime });
}

export default {
  getDevelopers,
  find,
  setWorkedHours,
  createDeveloper,
};
