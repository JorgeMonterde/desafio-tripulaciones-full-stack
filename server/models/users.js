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
