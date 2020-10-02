const { Model, DataTypes } = require('sequelize');

class DeveloperProjects extends Model {
    static init(sequelize) {
        super.init({
            workedTimeInMiliseconds: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'developerProjects',
        })
    }
}

module.exports = DeveloperProjects;