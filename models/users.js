const Sequelize = require('sequelize');
const sequelize = require('../data/dbconnection');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    surname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nickname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
   
     
} , {
    tableName: 'users'
});

module.exports = User;