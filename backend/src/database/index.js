const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Developer = require('../models/Developer');
const Project = require('../models/Project');
const DeveloperProjects = require('../models/DeveloperProject');


const connection = new Sequelize(dbConfig);
DeveloperProjects.init(connection);
Developer.init(connection);
Project.init(connection);

Developer.associate(connection.models);
Project.associate(connection.models);
DeveloperProjects.associate(connection.models);

module.exports = connection;