const { DataTypes } = require('sequelize');
const sequelize = require("../utils/db_mysql");
//console.log(sequelize);

const Buildings = sequelize.define("Buildings", {
        user_id:{
            type: DataTypes.UUID,
            references: {
                model: Users,
                key: "user_id"
            },
            allowNull: false
        },
        address_number:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        street:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        postal_code:{
            type: DataTypes.NUMBER,
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
        autonomous_community:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
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
            type: DataTypes.NUMBER,
            allowNull: false
        },
        year_of_construction:{
            type: DataTypes.NUMBER,
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
        timestamps: true
    }
)

Buildings.sync();

module.exports = Buildings;
