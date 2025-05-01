const { Sequelize } = require('sequelize');
const config = require('../config/config.js').development;
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = require('./user')(sequelize);

sequelize.sync()
    .then(() => console.log('DB sync OK'))
    .catch(err => console.error('DB sync error:', err));

module.exports = { sequelize, User };
