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

// GET A INGREDIENT OF A RECIPE BY RECIPE ID
router.get("/:id/shoppingList", async (req, res) => {
  try {
    const { id } = req.params;
    const IngredientsOfRecipe = await Recipes.getShoppingList(id);

    if (IngredientsOfRecipe.length) {
      res.json(IngredientsOfRecipe);
    } else {
      res.status(404).json({
        message: `The recipe with the id: ${id} does not contain any ingredients so far.`
      });
    }
  } catch (err) {
    const { id } = req.params;

    res.status(500).json({
      error: `There was an error getting ingredients of the recipe with the id: ${id}.`
    });
  }
});

// GET A STEP OF A RECIPE BY RECIPE ID
router.get("/:id/instructions", async (req, res) => {
  try {
    const { id } = req.params;
    const instructions = await Recipes.getInstructions(id);

    if (instructions.length) {
      res.json(instructions);
    } else {
      res.status(404).json({
        message: `The recipe with the id: ${id} does not contain any instructions so far.`
      });
    }
  } catch (error) {
    const { id } = req.params;

    res.status(500).json({
      error:
        `There was an error getting instructions of the recipe with the id: ${id}.` +
        error
    });
  }
});

module.exports = router;
