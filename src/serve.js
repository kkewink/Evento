const express = require("express");
const router = require("./router/router");
const sequelize = require("./config/config");

const app = express()

app.use(express.json());

app.use('/api',router)

app.get('/healthcheck', (req,res) =>{
    return res.status(200).json({
        msg: 'Estamos vivos!',
        alive:true
    });
})

sequelize
    .authenticate()
    .then(() =>{
        console.log("Conexão funcionando");
        return sequelize.sync();
    })

    .then(() =>{
        app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
            console.log("######################");
            console.log("Rodando no servidor 8080");
            console.log("######################")
        });
    })

    .catch((error) => {
        console.error("Erro ao se conectar com o site", error);
    })