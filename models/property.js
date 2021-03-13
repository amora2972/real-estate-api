const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')
const Country = require('./country')
const User = require('./user')

const Property = sequelize.define('Property', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Country,
            key: 'id',
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        }
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
})

module.exports = Property