const express = require('express');
const server = express();

const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');

server.use(express.json());

server.use('/api', usersRouter);
server.use('/api', authRouter);

module.exports = server;