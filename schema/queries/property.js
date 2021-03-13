const graphql = require('graphql')
const propertyController = require('../../controllers/property.controller')
const { propertyType } = require('../types/index')

const {
    GraphQLID,
    GraphQLList,
} = graphql


module.exports = {
    properties: {
        type: new GraphQLList(propertyType),
        async resolve(parent, args) {
            return await propertyController.getAll()
        }
    },
    property: {
        type: propertyType,
        args: { id: { type: GraphQLID } },
        async resolve(parent, args) {
            return await propertyController.getById(args)
        }
    },
}