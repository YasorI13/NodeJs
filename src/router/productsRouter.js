const express = require('express'); // import express
const productsRouter = express.Router(); // router is a function
const products = require('../data/products.json'); // import products.json

productsRouter.route("/").get((req, res) => {
    res.render("products",{
    products, 
    });
});

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id; // get the id from the url
    res.render("product",{
        product: products[id],
    })
});

module.exports = productsRouter; // export the router


