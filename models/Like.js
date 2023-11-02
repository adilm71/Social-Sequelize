const { DataTypes } = require("sequelize");

const Like = sequelize.define("Like", {
  body: DataTypes.STRING,
  createdAt: DataTypes.DATE,
});

module.exports = Like;
