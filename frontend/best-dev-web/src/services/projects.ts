/* eslint-disable no-dupe-keys */
import api from './api';


const getProjects = (id: number) => {
    return api.get(`developers/${id}/projects`);
};
export default {
    getProjects,
};
