const {DataTypes} = require("sequelize");
const sequelize =  require("../config/config");
const Partic = sequelize.define('partic', {
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    eventoID:{
        type:asd
    },
});

module.exports = partic;