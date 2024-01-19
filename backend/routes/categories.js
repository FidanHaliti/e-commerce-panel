const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

// Get new categories
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
}),
  // Gjitha kategorite (Read All)
  router.get("/", async (req, res) => {
    try {
      const categories = await Category.find();

      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });

//vetem nje kategori te caktuar (Read-Single)
router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    try {
      const category = await Category.findById(categoryId);
      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Category not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error Fidan." });
  }
});

// Update kategory (Update)
router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;

    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return res.status(404).json({ error: "Category not found." });
    }

    const updateCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      {
        new: true,
      }
    );
    res.status(200).json(updateCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error." });
  }
});

//Fshij Kategorin (Delete)
router.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const deleteCategory = await Category.findByIdAndDelete(categoryId);
    if (!deleteCategory) {
      return res.status(404).json({ error: "Category not found." });
    }
    res.status(200).json(deleteCategory);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to Delete." });
  }
});

module.exports = router;
