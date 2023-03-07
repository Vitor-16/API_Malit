//ARQUIVO ENDRY POINT DO PROJETO, FAZENDO USO DO EXPRESS 
//ARQUIVO DE CONFIGURAÇÃO DO EXPRESS
const express = require('express');

const app = express();

//FAZENDO USO DO DOTENV
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.get('/', (req, res)=> res.send('Olá Mundo'));
app.listen(PORT, ()=> console.log('SERVIDOR RODANDO EM http://localhost:${PORT}'));


