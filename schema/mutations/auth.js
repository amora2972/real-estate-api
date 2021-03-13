const { userType } = require('../types/index')
const { GraphQLString } = require('graphql')
const userController = require('../../controllers/user.controller')

module.exports = {
    register: {
        type: userType,
        args: {
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString },
        },
        async resolve(parent, args) {
            return await userController.registerUser(args);
        }
    },
}