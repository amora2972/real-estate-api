const graphql = require('graphql')
const auth = require('./auth')
const property = require('./property')

const {
    GraphQLObjectType,
} = graphql

const Mutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        ...auth,
        ...property,
    }
})

module.exports = Mutations