require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')

async function start()
{
    const app = express()
    const server = new ApolloServer()
}

start()