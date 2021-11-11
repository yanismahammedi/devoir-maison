const express = require('express');

const hostname ='0.0.0.0';
const port = 3000;

const server = express();

const mongoose = require("mongoose");
mongoose.connect('mongodb://mongo/apib2');

server.use(express.urlencoded());
server.use(express.json());

const postRoute = require("./routes/postRoute");
postRoute(server);

server.listen(port, hostname);