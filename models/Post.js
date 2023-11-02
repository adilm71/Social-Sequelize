const { Sequelize, DataTypes } = require("sequelize");

const Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  body: DataTypes.STRING,
  createdAt: DataTypes.DATE,
});

module.exports = Post;
