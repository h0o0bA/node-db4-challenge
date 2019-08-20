exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("RecipesIngredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("RecipesIngredients").insert([
        { ID: 1, RecipeID: 1, IngredientID: 2, Quantity: 150 },
        { ID: 2, RecipeID: 1, IngredientID: 9, Quantity: 200 },
        { ID: 3, RecipeID: 1, IngredientID: 8, Quantity: 175 },
        { ID: 4, RecipeID: 1, IngredientID: 3, Quantity: 250 },
        { ID: 5, RecipeID: 1, IngredientID: 4, Quantity: 4 },
        { ID: 6, RecipeID: 2, IngredientID: 1, Quantity: 200 },
        { ID: 7, RecipeID: 2, IngredientID: 3, Quantity: 200 },
        { ID: 8, RecipeID: 2, IngredientID: 5, Quantity: 5 },
        { ID: 9, RecipeID: 2, IngredientID: 6, Quantity: 3 },
        { ID: 10, RecipeID: 3, IngredientID: 7, Quantity: 30 },
        { ID: 11, RecipeID: 3, IngredientID: 1, Quantity: 200 },
        { ID: 12, RecipeID: 3, IngredientID: 2, Quantity: 15 }
      ]);
    });
};
