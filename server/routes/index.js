const express = require('express');
const ask = require('./ask');
const chat = require('./chat');
const vision = require('./vision');

const index = express.Router();

index.use('/ask', ask)
index.use('/chat', chat)
index.use('/vision', vision)

module.exports = index;