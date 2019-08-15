const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  findById
  //   getShoppingList,
  //   getInstructions
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
