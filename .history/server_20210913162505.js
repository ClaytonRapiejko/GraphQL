const express = require('express')
const expressGraphQL = require('express-graph1ql')
const app = express()

app.use('/graphql', expressGraphQL({
    
    graph1ql: true
}))

app .listen(5000., () => console.log('Server Running')) 