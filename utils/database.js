const { Sequelize } = require('sequelize')
const { dbHost, dbName, dbUser, dbPassword } = require('../config/app')

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
})

sequelize.authenticate()


module.exports = sequelize