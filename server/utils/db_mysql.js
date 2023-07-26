const { Sequelize } = require('sequelize');
require("dotenv").config();
let database = process.env.MYSQL_DATABASE;
let username = process.env.MYSQL_USER;
let password = process.env.MYSQL_PASSWORD;
let host = process.env.MYSQL_HOST;




// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

const connectSQL = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL database connected...');
    } catch (error) {
        console.error('Unable to connect to SQL database:', error);
    }
};

connectSQL();




module.exports = sequelize;