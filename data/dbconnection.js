const Sequelize = require("sequelize");

const sequelize = new Sequelize('checkoutDb', 'root', '1995op1995' ,{
    dialect:'mysql',
    host: 'localhost'
})

module.exports = sequelize;