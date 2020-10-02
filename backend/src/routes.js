const express = require('express');
const DeveloperController = require('./controllers/DeveloperController');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();

// CRUD developers
routes.get('/developers', DeveloperController.index);
routes.get('/developers/:developerId', DeveloperController.find);
routes.delete('/developers/:developerId', DeveloperController.destroy);
routes.post('/developers', DeveloperController.store);
routes.get('/developers/:developerId', DeveloperController.find);

// manipulate projects for developer
routes.post('/developers/:developerId/projects', ProjectController.store);
routes.get('/developers/:developerId/projects', ProjectController.indexForDeveloper);
routes.delete('/developers/:developerId/projects', ProjectController.destroyForDeveloper);

// CRUD projects
routes.get('/projects', ProjectController.index);
// routes.get('/projects/:projectId', ProjectController.find);
// routes.delete('/projects/:projectId', ProjectController.destroy);
// routes.post('/project', ProjectController.store);

module.exports = routes;