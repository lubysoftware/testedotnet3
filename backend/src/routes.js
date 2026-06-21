const express = require('express');
const DeveloperController = require('./controllers/DeveloperController');
const ProjectController = require('./controllers/ProjectController');
const RankingController = require('./controllers/RankingController');

const routes = express.Router();

// CRUD developers
routes.get('/developers', DeveloperController.index);
routes.get('/developers/:developerId', DeveloperController.find);
routes.delete('/developers/:developerId', DeveloperController.destroy);
routes.post('/developers', DeveloperController.store);
routes.get('/developers/:developerId', DeveloperController.find);

// manipulate projects for developer
routes.post('/developers/:developerId/projects', ProjectController.store);
routes.put('/developers/:developerId/projects/:projectId', ProjectController.update);

routes.get('/developers/:developerId/projects', ProjectController.indexForDeveloper);
routes.get('/developers/:developerId/projects/:projectId', ProjectController.findforDeveloperByProject);
routes.delete('/developers/:developerId/projects', ProjectController.destroyForDeveloper);

routes.get('/projects', ProjectController.index);

// ranking
routes.get('/ranking', RankingController.index);


module.exports = routes;