const { Model, DataTypes } = require('sequelize');

class Developer extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'developers',
        })
    }
    static associate(models) {
        this.belongsToMany(models.Project, { foreignKey: 'developerId', through: 'developerProjects', name: 'developers' })
    }
}

module.exports = Developer;