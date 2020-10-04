const { Model, DataTypes } = require('sequelize');

class DeveloperProject extends Model {
    static init(sequelize) {
        super.init({
            workedTimeInMiliseconds: DataTypes.INTEGER,
            projectId: DataTypes.INTEGER,
            developerId: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'developerProjects',
        })
    }
}

module.exports = DeveloperProject;