const DataLoader = require('dataloader')
const propertyService = require('../services/property.service')

module.exports.propertyLoader = new DataLoader(async ids => {
    let properties = await propertyService.getByIds(ids)
    properties = ids.map(
        id => properties.find(property => property.id === id) || new Error(`Row not found: ${id}`)
    )
    return properties
});