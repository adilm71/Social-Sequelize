const { Sequelize, DataTypes } = require("sequelize");

const Profile = sequelize.define("Profile", {
  bio: DataTypes.STRING,
  profilePicture: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

module.exports = Profile;
