const express = require('express');
const DeveloperController = require('./controllers/DeveloperController');

const routes = express.Router();

routes.get('/developers', DeveloperController.index);
routes.get('/developers/:developerId', DeveloperController.find);
routes.delete('/developers/:developerId', DeveloperController.destroy);
routes.post('/developers', DeveloperController.store);
routes.put('/developers/:developerId', DeveloperController.update);

module.exports = routes;