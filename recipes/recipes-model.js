const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  findById,
  getShoppingList,
  getInstructions
  //   add,
  //   update,
  //   remove
};

function getRecipes() {
  return db("recipes").select("id", "RecipeName");
}

function findById(id) {
  return db("recipes")
    .select("id", "RecipeName")
    .where("id", id)
    .first()
    .then(recipe => {
      if (recipe) {
        return recipe;
      } else {
        return null;
      }
    });
}

function getShoppingList(id) {
  return db("RecipesIngredients as ri")
    .join("Recipes as r", "ri.RecipeID", "=", "r.id")
    .join("Ingredients as i", "ri.IngredientID", "=", "i.id")
    .where("RecipeID", id)
    .select("r.RecipeName", "i.IngredientName", "ri.Quantity")
    .orderBy("i.id");
}

function getInstructions(id) {
  return db("recipes").where("id", id);
}
//   return db("steps as s")
//     .join("recipes as r", "s.RecipeID", "r.id")
//     .where("RecipeID", id)
//     .select("r.RecipeName", "s.StepNumber", "s.instruction")
//     .orderBy("StepNumber");
