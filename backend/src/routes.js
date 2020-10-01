const express = require('express');
const DeveloperController = require('./controllers/DeveloperController');

const routes = express.Router();

routes.get('/developers', DeveloperController.index);
routes.post('/developers', DeveloperController.store);

module.exports = routes;