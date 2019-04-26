const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const flagRoute = require('./flag')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes) //////////CREATE NEW FOR YOUR API

//what goes int he first argument here? Why?
server.use('/api/v1/reddit', flagRoute)

module.exports = server


//http://www.reddit.com/r/ireland.json