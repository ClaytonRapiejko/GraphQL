const express = require('express')
const { graphqlHTTP } = require("express-graphql");
const {
    graph
}
const app = express()

app.use('/graphql', expressGraphQL({
    graphql: true
}))

app .listen(5000., () => console.log('Server Running')) 