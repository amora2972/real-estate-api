const propertyService = require('../services/property.service')

module.exports.getAll = (req, res, next) => {
    return propertyService.getAll();
}

module.exports.getAllPropertiesByUserId = (id) => {
    return propertyService.getByUserId(id)
}

module.exports.getById = (req, res, next) => {
    return propertyService.getById(req.id);
}

module.exports.create = (req) => {
    return propertyService.create(req)
}

module.exports.update = (req) => {
    return propertyService.update(req)
}

module.exports.deleteById = (req) => {
    return propertyService.delete(req.id)
}