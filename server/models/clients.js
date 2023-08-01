<<<<<<< HEAD:server/models/users.js
const { DataTypes } = require('sequelize');
const sequelize = require("../utils/db_mysql");
//console.log(sequelize);

const Users = sequelize.define("Users", {
        user_id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false
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
        user_position:{
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
        modelName:"Users",
        tableName:"users",
        timestamps: false
    }
)

Users.sync();

module.exports = Users;
=======
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
>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c:server/models/clients.js
