const User = require("../model/User");

module.exports = (database) => {
  database.addUser(
    new User(
      {
        "id": 1,
        "email": "example@example.com",
        "username": "MyUsername",
        "birth": "2000-08-29T09:12:33.001Z",
        "phone": "(11)99999-9999",
        "password": "string hash",
        "createdAt": "2016-08-29T09:12:33.001Z",
        "updatedAt": "2016-08-29T09:12:33.001Z",
        "isAdmin": true,
        "isActive": true
      }
    )
  )

  database.addUser(
    new User(
      {
        "id": 2,
        "email": "example@example.com",
        "username": "MyUsername",
        "birth": "2000-08-29T09:12:33.001Z",
        "phone": "(11)99999-9999",
        "password": "string hash",
        "createdAt": "2016-08-29T09:12:33.001Z",
        "updatedAt": "2016-08-29T09:12:33.001Z",
        "isAdmin": true,
        "isActive": true
      }
    )
  )

  database.addUser(
    new User(
      {
        "id": 3,
        "email": "example@example.com",
        "username": "MyUsername",
        "birth": "2000-08-29T09:12:33.001Z",
        "phone": "(11)99999-9999",
        "password": "string hash",
        "createdAt": "2016-08-29T09:12:33.001Z",
        "updatedAt": "2016-08-29T09:12:33.001Z",
        "isAdmin": true,
        "isActive": true
      }
    )
  )

  database.addUser(
    new User(
      {
        "id": 4,
        "email": "example@example.com",
        "username": "MyUsername",
        "birth": "2000-08-29T09:12:33.001Z",
        "phone": "(11)99999-9999",
        "password": "string hash",
        "createdAt": "2016-08-29T09:12:33.001Z",
        "updatedAt": "2016-08-29T09:12:33.001Z",
        "isAdmin": true,
        "isActive": true
      }
    )
  )
}