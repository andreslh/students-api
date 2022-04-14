const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Student = sequelize.define(
    'Student',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      schoolName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      license: {
        type: Sequelize.ENUM('licensed', 'not licensed'),
        allowNull: false,
      },
    },
    {}
  );
  return Student;
};
