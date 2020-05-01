const Sequelize = require('sequelize');
const db = require('../config/database');

const Build = db.define('build', {
    parts: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.INTEGER
    },
    image: {
        type: Sequelize.STRING
    }

})

module.exports = Build;