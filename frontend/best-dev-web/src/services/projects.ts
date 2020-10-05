import { Project } from '../interfaces/project';
/* eslint-disable no-dupe-keys */
import api from './api';

const addProjectToDeveloper = (developerId: number, project: Project) => {
    return api.post(`developers/${developerId}/projects`, project);
};

const getProjects = (id: number) => {
    return api.get(`developers/${id}/projects`);
};
export default {
    getProjects,
    addProjectToDeveloper,
};
