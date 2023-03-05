//IMPORTS
const {Sequelize, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');

//CONEXÃO COM BD
const connection = require('../config/connection');

const UsuariosModel = connection.define('tbl_usuarios', 
{
    id_Usuarios:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_Usuarios:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf_Usuarios:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isCPF(value) {
                const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
                if (!cpfPattern.test(value)) {
                  throw new Error('O CPF informado é inválido');
                } 
            }  
        }
    },
    dataNasc_Usuarios:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    email_Usuarios:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha_Usuarios:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            lens: [6, 20]
        },
        hooks:{
            beforeCreate: async (usuarios) => {
                const salt = await bcrypt.genSaltSync();
                usuarios.senha = await bcrypt.hashSync(usuarios.senha, salt);
            }
        }
    }
});

//UsuariosModel.sync({force: true});
module.exports = UsuariosModel;
