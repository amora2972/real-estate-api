const DataLoader = require('dataloader')
const userService = require('../services/user.service')

module.exports.userLoader = new DataLoader(async ids => {
    let users = await userService.getByIds(ids)
    users = ids.map(
        id => users.find(user => user.id === id) || new Error(`Row not found: ${id}`)
    )
    return users;
});