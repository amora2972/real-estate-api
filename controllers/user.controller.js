const userService = require('../services/user.service')

module.exports.getAllUsers = async (req, res, next) => {
    return await userService.getAll()
}

module.exports.registerUser = async (req, res, next) => {
    return await userService.register(req)
}


module.exports.getById = async (req, res, next) => {
    return await userService.getById(req.id)
}
