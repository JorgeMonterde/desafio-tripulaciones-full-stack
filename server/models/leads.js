const { DataTypes } = require('sequelize');
const sequelize = require("../utils/db_mysql");


const Leads = sequelize.define("Leads", {
        lead_id:{
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
            type: DataTypes.STRING(45),
            allowNull: false
        },
        lead_position:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        /* address_number:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        street:{
            type: DataTypes.STRING(100),
            allowNull: false
        }, */
        address:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        postal_code:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        city:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        province:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        /* autonomous_community:{
            type: DataTypes.STRING(100),
            allowNull: false
        }, */
        community_type: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    },{
        modelName:"Leads",
        tableName:"leads",
        timestamps: false
    }
)

Leads.sync();

module.exports = Leads;
