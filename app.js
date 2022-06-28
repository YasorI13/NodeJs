const express = require('express'); // import express
const chalk = require('chalk'); // for color output
const debug = require('debug')('app'); // debug is a function
const morgan = require('morgan'); // middleware for logging requests
const path = require('path'); // path is a node module

const app = express();  // create an express app
const port = 3000;  // port to listen on

app.use(morgan('combined'));    // use morgan to log requests
app.use(express.static(path.join(__dirname, '/public/'))); // use express to serve static files

app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.listen(port, () => {
    debug("Listening on port "+ chalk.red(" : " + port));
})