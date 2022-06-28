const express = require('express'); // import express
const chalk = require('chalk'); // for color output
const debug = require('debug')('app'); // debug is a function
const morgan = require('morgan'); // middleware for logging requests
const path = require('path'); // path is a node module

const app = express();  // create an express app
const PORT = process.env.PORT;  // port to listen on

app.use(morgan('combined'));    // use morgan to log requests
app.use(express.static(path.join(__dirname, '/public/'))); // use express to serve static files

app.get("/", (req, res) =>{
    res.send("Hello Suriya");
});

app.listen(PORT, () => {
    debug("Listening on port "+ chalk.red(" : " + PORT));
})