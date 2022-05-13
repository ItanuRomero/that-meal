const Recipe = require("../model/Recipe");

module.exports = (database) => {
  database.addRecipe(
    new Recipe(
      {
        "id": 1,
        "name": "Suco de maçã",
        "image": "path/to/image",
        "body": "Texto com modo de preparo",
        "createdBy": {
          "id": 1,
          "email": "example@example.com",
          "username": "MyUsername",
          "birth": "2016-08-29T09:12:33.001Z",
          "phone": "(11)99999-9999",
          "password": "string hash",
          "createdAt": "2016-08-29T09:12:33.001Z",
          "updatedAt": "2016-08-29T09:12:33.001Z",
          "isAdmin": true,
          "isActive": true
        }
      }
    )
  )
}