const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');

server.use(helmet())
server.use(cors())
server.use(express.json());

server.use('/api', usersRouter);
server.use('/api', authRouter);

module.exports = server;