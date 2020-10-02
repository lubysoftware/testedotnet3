const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Developer = require('../models/Developer');
const Project = require('../models/Project');
const DeveloperProjects = require('../models/DeveloperProjects');


const connection = new Sequelize(dbConfig);
Developer.init(connection);
Project.init(connection);
DeveloperProjects.init(connection);

Developer.associate(connection.models);
Project.associate(connection.models);

module.exports = connection;