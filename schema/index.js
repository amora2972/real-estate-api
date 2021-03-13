const graphql = require('graphql')
const RootQuery = require('./queries/index')
const Mutations = require('./mutations/index')

const {
    GraphQLSchema,
} = graphql

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations,
})