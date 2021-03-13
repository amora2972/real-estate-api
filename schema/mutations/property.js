const { propertyType, Void } = require('../types/index')
const { GraphQLString, GraphQLID, GraphQLInt } = require('graphql')
const propertyController = require('../../controllers/property.controller')

const propertyInput = {
    name: { type: GraphQLString },
    price: { type: GraphQLString },
    countryId: { type: GraphQLID },
    userId: { type: GraphQLID },
}

module.exports = {
    createProperty: {
        type: propertyType,
        args: propertyInput,
        resolve(parent, args) {
            return propertyController.create(args);
        }
    },
    updateProperty: {
        type: propertyType,
        args: {
            id: { type: GraphQLID },
            ...propertyInput,
        },
        resolve(parent, args) {
            return propertyController.update(args);
        }
    },
    deleteProperty: {
        type: Void,
        args: {
            id: { type: GraphQLID }
        },
        resolve(parent, args) {
            return propertyController.deleteById(args)
        }
    }
}