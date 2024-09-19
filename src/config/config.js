const { sequelize, Sequelize } = require("sequelize");

const sequelize = new Sequelize('vendaevento', 'root', 'root', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;