const graphql = require('graphql')
const userQuery = require('./user')
const propertyQuery = require('./property')
const countryQuery = require('./country')

const {
    GraphQLObjectType,
} = graphql

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        ...userQuery,
        ...propertyQuery,
        ...countryQuery,
    }
})

module.exports = RootQuery