const graphql = require('graphql')
const countryController = require('../../controllers/country.controller')
const { countryType } = require('../types/index')

const {
    GraphQLID,
    GraphQLList,
} = graphql


module.exports = {
    countries: {
        type: new GraphQLList(countryType),
        resolve(parent, args) {
            return countryController.getAll()
        }
    },
    // property: {
    //     type: propertyType,
    //     args: { id: { type: GraphQLID } },
    //     async resolve(parent, args) {
    //         return await propertyController.getById(args)
    //     }
    // },
}