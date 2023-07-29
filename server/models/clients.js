const { DataTypes } = require('sequelize');
const sequelize = require("../utils/db_mysql");


const Clients = sequelize.define("Clients", {
        client_id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        first_name:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        surname:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        telephone_num:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        client_position:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        hashed_password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        logged:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },{
        modelName:"Clients",
        tableName:"clients",
        timestamps: false
    }
)

Clients.sync();

module.exports = Clients;
