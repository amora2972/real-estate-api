const countryService =  require('../services/country.service')

module.exports.getAll = () => {
    return countryService.getAll()
}