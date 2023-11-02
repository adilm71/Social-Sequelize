const { DataTypes } = require("sequelize");

const Comment = sequelize.define("Comment ", {
  body: DataTypes.STRING,
  createdAt: DataTypes.DATE,
});

module.exports = Comment;
