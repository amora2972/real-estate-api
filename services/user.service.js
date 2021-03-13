const User = require('../models/user')
const validator = require('../utils/validator')
const { jwtSecret } = require('../config/app')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports.getAll = async () => {
    return await User.findAll()
}

module.exports.create = async (post) => {
    const rules = {
        name: 'required',
        email: 'required',
        password: 'required',
        username: 'required',
    }
    validator(post, rules, {})
    return await User.create(post)
}

module.exports.register = async (user) => {
    const rules = {
        name: 'required',
        email: 'required',
        password: 'required',
    }

    validator(user, rules, {})

    user.password = await bcrypt.hash(user.password, 12)
    user = await User.create(user)

    user.token = jwt.sign({
        id: user.id,
        email: user.email,
    }, jwtSecret)

    return user
}

module.exports.getById = async (id) => {
    return await User.findByPk(id)
}

module.exports.getByIds = async (ids) => {
    return await User.findAll({where: {id: ids}})
}