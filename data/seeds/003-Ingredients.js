exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Ingredients").insert([
        { id: 1, IngredientName: "water" },
        { id: 2, IngredientName: "sugar" },
        { id: 3, IngredientName: "flour" },
        { id: 4, IngredientName: "apple" },
        { id: 5, IngredientName: "salt" },
        { id: 6, IngredientName: "baking soda" },
        { id: 7, IngredientName: "lemon" },
        { id: 8, IngredientName: "butter" },
        { id: 9, IngredientName: "milk" }
      ]);
    });
};
