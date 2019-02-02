const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const router = require('./routes')

const app = express();

// App Setup
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// App Router
router(app);

// Server Setup
const server = http.createServer(app);
server.listen(config.PORT);
console.log(`Server listening on: ${config.URL}`);