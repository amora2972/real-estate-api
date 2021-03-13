const graphql = require('graphql')
const propertyController = require('../../controllers/property.controller')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLScalarType,
} = graphql

const Void = new GraphQLScalarType({
    name: 'Void',

    description: 'Represents NULL values',

    serialize() {
        return null
    },

    parseValue() {
        return null
    },

    parseLiteral() {
        return null
    }
})

const countryType = new GraphQLObjectType({
    name: 'Country',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        parentId: { type: GraphQLID },
        // properties: {
        //     type: new GraphQLList(propertyType),
        //     async resolve(parent, args, ctx) {
                
        //     }
        // },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    })
})

const propertyType = new GraphQLObjectType({
    name: 'Property',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type:  GraphQLString},
        price: { type: GraphQLFloat },
        user: {
            type: userType,
            resolve(parent, args, ctx) {
                return ctx.userLoader.load(parent.UserId)
            }
        },
        country: {
            type: countryType,
            resolve(parent, args, ctx) {
                return ctx.countryLoader.load(parent.CountryId)
            }
        }
    })
})

const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type:  GraphQLString},
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        token: { type: GraphQLString },
        properties: {
            type: new GraphQLList(propertyType),
            resolve(user, args, ctx) {
                return propertyController.getAllPropertiesByUserId(user.id)
            }
        },
    })
})

module.exports = {
    userType,
    propertyType,
    countryType,
    Void,
}