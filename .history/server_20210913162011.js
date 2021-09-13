const express = require('express')
const expressGraphQL = require('express-graph1ql')
const app = express()

app.use('/grapq')

app .listen(5000., () => console.log('Server Running')) 