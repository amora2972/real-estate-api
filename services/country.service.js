const Country = require('../models/country')

module.exports.getAll = async () => {
    return await Country.findAll()
}

module.exports.getByIds = async (ids) => {
    return await Country.findAll({where: {id: ids}})
}