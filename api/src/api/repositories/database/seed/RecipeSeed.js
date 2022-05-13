const Recipe = require("../model/Recipe");

module.exports = (database) => {
  database.addRecipe(
    new Recipe(
      {
        "name": "Suco de maçã",
        "image": "path/to/image",
        "body": "Texto com modo de preparo",
        "createdBy": {
          "id": 1,
        }
      }
    )
  )

  database.addRecipe(
    new Recipe(
      {
        "name": "Suco de maçã",
        "image": "path/to/image",
        "body": "Texto com modo de preparo",
        "createdBy": {
          "id": 2,
        }
      }
    )
  )
}