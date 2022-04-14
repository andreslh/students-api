const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Filter = sequelize.define(
    'Filter',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.TEXT,
        allowNull: false,
        get: function () {
          return JSON.parse(this.getDataValue('data'));
        },
        set: function (data) {
          this.setDataValue('data', JSON.stringify(data));
        },
      },
    },
    {}
  );
  return Filter;
};
