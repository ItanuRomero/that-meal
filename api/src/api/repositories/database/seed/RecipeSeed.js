const Recipe = require("../model/Recipe");

module.exports = (database) => {
  database.addRecipe(
    new Recipe(
      {
        "name": "Suco de maçã",
        "image": "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2256-61897d3945290a987afb9748c966202d.jpg",
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
        "image": "https://www.saborbrasil.it/wp-content/uploads/2021/06/suco-de-melancia.jpg",
        "body": "Bata 3x a melância no liquidificador",
        "createdBy": {
          "id": 2,
        }
      }
    )
  )
}
