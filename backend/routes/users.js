const express = require("express");
const router = express.Router();
const User = require("../models/User.js");



// Gjitha user-ar (Read All)

router.get("/", async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });

//Fshije Userin (Delete)

router.delete("/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const deletedUser = await User.findOneAndDelete({email});
    if (!deletedUser) {
      return res.status(404).json({ error: "email not found." });
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "email to Delete." });
  }
});
  module.exports = router;