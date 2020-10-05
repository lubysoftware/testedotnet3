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
    static associate(models) {
        this.hasOne(models.Developer, { foreignKey: 'id', as: 'Developers' })
        this.hasOne(models.Project, { foreignKey: 'id', as: 'Projects' })
    }
}

module.exports = DeveloperProject;