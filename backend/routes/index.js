const express = require("express");
const router = express.Router();

// integrimi i dosjave tjera ne rute 
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");

//gjdo rute te jete ne rrugen e saje 
router.use("/categories", categoryRoute);
router.use("/products", productRoute);

module.exports = router;
