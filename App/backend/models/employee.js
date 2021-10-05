module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "employee",
    {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      hire_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      job_title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "employees",
      timestamps: false,
    }
  );
};
