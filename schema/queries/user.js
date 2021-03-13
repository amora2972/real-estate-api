const graphql = require('graphql')
const userController = require('../../controllers/user.controller')
const { userType } = require('../types/index')

const {
    GraphQLID,
    GraphQLList,
} = graphql


module.exports = {
    users: {
        type: new GraphQLList(userType),
        async resolve(parent, args) {
            return await userController.getAllUsers()
        }
    },
    user: {
        type: userType,
        args: { id: { type: GraphQLID } },
        async resolve(parent, args) {
            return await userController.getById(args)
        }
    },
}