const express = require("express");
const router = express.Router();

// Gjitha produktet (Read All)
router.get("/" , async (req, res) =>{
    res.send("Product Send!")
    });

    module.exports = router
