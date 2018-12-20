require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server')
const { readFileSync } = require('fs')
var typeDefs = readFileSync('./typeDefs.graphql', 'UTF-8')
const resolvers = require('./resolvers')

async function start()
{
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server
     .listen()
     .then(({url}) => console.log(`GraphQL Service running on ${url}`))
}

start()