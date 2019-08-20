exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Recipes").insert([
        {
          ID: 1,
          RecipeName: "Apple Pie",
          Instruction:
            "Mix milk, sugar, butter and flour. Put apples on top. Bake for 20 mins at 200 degrees."
        },
        {
          ID: 2,
          RecipeName: "Bread",
          Instruction:
            "Mix flour, salt, water and baking soda and put in the oven."
        },
        {
          ID: 3,
          RecipeName: "Lemondade",
          Instruction: "Mix lemon juice and water and add sugar"
        }
      ]);
    });
};
