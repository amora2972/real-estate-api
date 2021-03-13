const Validator = require('validatorjs')

const validator = (body, rules, customMessages) => {
    const validation = new Validator(body, rules, customMessages)
    validation.passes(() => true)
    validation.fails(() => {
        const error = new Error('invalid data')
        error.code = 422
        error.data = validation.errors.errors
        throw error
    })
}

module.exports = validator