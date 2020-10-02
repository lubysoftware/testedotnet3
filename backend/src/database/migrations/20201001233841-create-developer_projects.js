module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('developerProjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      developerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'developers', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'projects', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      workedTimeInMiliseconds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('developerProjects');
  }
};
