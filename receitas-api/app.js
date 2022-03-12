const express = require("express");
const cors = require("cors");

const app = express();

//Configuração dos middlewares
app.use(cors());

//Configuração das rotas da API
app.get("/", (req, res) =>{
    res.send("Express server");
    res.end();
});

//Exporta o aplicativo express configurado
module.exports = app;