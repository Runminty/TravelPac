const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const countriesNanzRoute = require('./countriesnanz') //not in use
const newsRoute = require('./news')
const flagRoute = require('./flag')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes) //////////CREATE NEW FOR YOUR API

server.use('/api/v1/countries', countriesNanzRoute) //not in use

server.use('/api/v1/countries', newsRoute)

//what goes int he first argument here? Why?
server.use('/api/v1/countries', flagRoute)

module.exports = server


//http://www.reddit.com/r/ireland.json