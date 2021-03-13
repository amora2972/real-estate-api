const express = require('express')
const {graphqlHTTP} = require("express-graphql")
const { port, jwtSecret } = require('./config/app')
const schema = require('./schema/index')
const Property = require('./models/property')
const User = require('./models/user')
const Country = require('./models/country')
const { userLoader } = require('./dataloaders/user.loader')
const { propertyLoader } = require('./dataloaders/property.loader')
const { countryLoader } = require('./dataloaders/country.loader')

const app = express()

app.use((req, res, next) => {
    // const token = req.headers.authorization
    // try {
    //     const { user } = jwt.verify(token, jwtSecret)
    //     req.user = user;
    // } catch(err) {
    //     console.log(err)
    // }
    next();
})

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: schema.query,
        graphiql: true,
        context: {
            userLoader: userLoader,
            propertyLoader: propertyLoader,
            countryLoader: countryLoader,
        },
        customFormatErrorFn(err) {
            if (! err.originalError) {
                return err
            }

            return {
                data: err.originalError.data,
                message: err.message,
                code: err.originalError.code,
            }
        },
    })
)

Property.belongsTo(Country)
Property.belongsTo(User)
User.hasMany(Property, {as: 'properties'})

app.listen(port, () => console.log(`node server is started at: ${port}`))