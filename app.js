const express = require('express'); // import express
const chalk = require('chalk'); // for color output
const debug = require('debug')('app'); // debug is a function
const morgan = require('morgan'); // middleware for logging requests
const path = require('path'); // path is a node module

const productRouter = express.Router(); // router is a function

const app = express();  // create an express app
const PORT = process.env.PORT;  // port to listen on
const productsRouter = require('./src/router/productsRouter'); // import products.json

app.use(morgan('combined'));    // use morgan to log requests
app.use(express.static(path.join(__dirname, '/public/'))); // use express to serve static files

app.set("views", "./src/views"); // set the views directory
app.set("view engine", "ejs"); // set the view engine to ejs

app.use("/products", productsRouter)

app.get("/", (req, res) => {
    //  res.send("Hello Suriya");
    res.render('index', { username: 'Suriya', customers: ["Suriya1", "Suriya2", "Suriya3"] });

});

app.listen(PORT, () => {
    debug("Listening on port " + chalk.red(" : " + PORT));
})