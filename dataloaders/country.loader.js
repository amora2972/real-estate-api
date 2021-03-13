const DataLoader = require('dataloader')
const countryService = require('../services/country.service')

module.exports.countryLoader = new DataLoader(async ids => {
    let countries = await countryService.getByIds(ids)
    countries = ids.map(
        id => countries.find(country => country.id === id) || new Error(`Row not found: ${id}`)
    )
    return countries;
});