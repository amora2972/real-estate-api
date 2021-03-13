const Property = require('../models/property')
const validator = require('../utils/validator')
const NotFoundException = require('../exceptions/not_found')
const rules = {
    name: 'required',
}

module.exports.getAll = async () => {
    return await Property.findAll()
}

module.exports.getAllByIds = async (ids) => {
    return await Property.findAll({where: {id: ids}})
}

module.exports.getByUserId = async(ids) => {
    return await Property.findAll({where: {userId: ids}})
}

module.exports.getById = async(id) => {
    return await Property.findByPk(id)
}

module.exports.create = async(property) => {
    validator(property, rules, {})

    return await Property.create(property)
}

module.exports.update = async(property) => {
    validator(property, rules)

    const dbProperty = await Property.findByPk(property.id)

    if (! dbProperty) throw new NotFoundException()

    return await dbProperty.update(property, {
        where: {
            id: property.id
        },
    })
}

module.exports.delete = (id) => {
    Property.destroy({
        where: { id: id }
    })
}