const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false 
    },
    firstName: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    lastName: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    emailId: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false 
    }
  }, {
    tableName: 'users'
  });

  return User;
};
