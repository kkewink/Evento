const {DataTypes} = require("sequelize");
const sequelize =  require("../config/config");
const Event = require("../models/Event");
const Participante = sequelize.define('partic', {
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    eventoID:{
        type:DataTypes.TINYINT,
        allowNull:false,
        references:{
            model:Event,
            key:"id"
        }
    },
});

module.exports = Participante;