const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const countriesNanzRoute = require('./countriesnanz')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes) //////////CREATE NEW FOR YOUR API

server.use('/api/v1/countries', countriesNanzRoute)

module.exports = server
