const Recipe = require("../model/Recipe");

module.exports = (database) => {
  database.addRecipe(
    new Recipe(
      {
        "name": "Suco de maçã",
        "image": "maca.png",
        "body": "Bata 5x a maça no liquidificador com água",
        "createdBy": {
          "id": 1,
        }
      }
    )
  )

  database.addRecipe(
    new Recipe(
      {
        "name": "Suco de melância",
        "image": "melancia.png",
        "body": "Bata 3x a melância no liquidificador",
        "createdBy": {
          "id": 2,
        }
      }
    )
  )
}
