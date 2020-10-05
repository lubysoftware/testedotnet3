const { Model, DataTypes } = require('sequelize');

class Project extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'projects',
        })
    }
    static associate(models) {
        this.belongsToMany(models.Developer, { foreignKey: 'projectId', through: 'developerProjects', name: 'projects' })
    }
}

module.exports = Project;