const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

module.exports = router;

// GET ALL RECIPES
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: "Failed to get recipes" });
  }
});

// GET A RECIPE BY RECIPE ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      res.json(recipe);
    } else {
      const { id } = req.params;
      res
        .status(404)
        .json({ message: `Could not find scheme with given ID: ${id}` });
    }
  } catch (error) {
    const { id } = req.params;
    res.status(500).json.json({ error: `Failed to get recipe with ID: ${id}` });
  }
});

module.exports = router;
