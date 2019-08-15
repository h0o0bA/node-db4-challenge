exports.up = function(knex) {
  return knex.schema
    .createTable("Recipes", function(table) {
      table.increments();
      table
        .text("RecipeName")
        .unique()
        .notNullable();
      table.text("Instruction").notNullable();
    })
    .createTable("Ingredients", function(table) {
      table.increments();
      table
        .text("IngredientName")
        .unique()
        .notNullable();
    })
    .createTable("RecipesIngredients", function(table) {
      table.increments();
      table
        .integer("RecipeID")
        .references("ID")
        .inTable("Recipes"),
        table
          .integer("IngredientID")
          .references("ID")
          .inTable("Ingredients");
      table.float("Quantity").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("RecipesIngredient")
    .dropTableIfExits("Ingredients")
    .dropTableIfExists("Recipes");
};
