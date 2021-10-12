module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user",
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
        required: true,
        minlength: 3,
        maxlength: 30,
      },
      email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(256),
        allowNull: false,
        required: true,
        minlength: 3,
        maxlength: 30,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
};
