//ARQUIVO DE CONEXÃO DO BD, IMPORT DO SEQUELIZE E CRIAÇÃO DO BD COM DOTENV
const Sequelize = require('sequelize');

const connection = new Sequelize({ 
    host: process.env.MYSQL_SEQUELIZE_HOST, 
    user: process.env.MYSQL_SEQUELIZE_USER, 
    password: process.env.MYSQL_SEQUELIZE_PASSWORD, 
    database: process.env.MYSQL_SEQUELIZE_DB, 
    dialect: process.env.MYSQL_SEQUELIZE_DIALECT, 
    timezone: process.env.MYSQL_SEQUELIZE_TIMEZONE
});

module.exports = connection;