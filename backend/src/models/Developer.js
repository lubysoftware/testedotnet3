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
}

module.exports = Developer;