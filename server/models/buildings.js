const { DataTypes } = require('sequelize');
const sequelize = require("../utils/db_mysql");


const Buildings = sequelize.define("Buildings", {
        client_id:{
            type: DataTypes.UUID,
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
        name_of_community:{
            type: DataTypes.STRING(100),
            allowNull: true
        },
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
        cif:{
            type: DataTypes.STRING(12),
            allowNull: false,
            unique:true
        },
        total_area:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        communal_areas_area:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        housing_area:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        number_of_apartments:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year_of_construction:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cadastre_number:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        energy_efficiency_certificate:{
            type: DataTypes.STRING(100)
        },
        project_state:{
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },{
        modelName:"Buildings",
        tableName:"buildings",
        timestamps: false
    }
)

Buildings.sync();

module.exports = Buildings;
