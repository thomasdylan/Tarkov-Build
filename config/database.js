const Sequelize = require('sequelize');

require('dotenv').config();

module.exports = new Sequelize('tarkov_builds_db', 'root', process.env.MYSQL_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});