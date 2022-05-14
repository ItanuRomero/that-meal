const User = require("../model/User");

module.exports = (database) => {
  database.addUser(
    new User(
      {
        "email": "gabriel.pereira@gmail.com",
        "username": "Gabriel Pereira",
        "birth": "2001-08-29T09:12:33.001Z",
        "phone": "(11)97178-4441",
        "password": "!22mfwa$1",
        "createdAt": "2022-04-29T09:12:33.001Z",
        "updatedAt": "2022-04-29T09:12:33.001Z",
        "isAdmin": true,
        "isActive": true
      }
    )
  )

  database.addUser(
    new User(
      {
        "email": "dudu.oliveira@gmail.com",
        "username": "Dudu Oliveira",
        "birth": "2000-08-29T09:12:33.001Z",
        "phone": "(11)98417-7416",
        "password": "@!Ffaun31",
        "createdAt": "2022-04-29T09:12:33.001Z",
        "updatedAt": "2022-04-29T09:12:33.001Z",
        "isAdmin": false,
        "isActive": true
      }
    )
  )

  database.addUser(
    new User(
      {
        "email": "victor.walt@gmail.com",
        "username": "Victor Walt",
        "birth": "1991-11-13T09:12:33.001Z",
        "phone": "(11)78975-4141",
        "password": "s4!4u4M",
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
        "email": "marcelo.dias@example.com",
        "username": "Marcelo Dias",
        "birth": "1969-01-11T09:12:33.001Z",
        "phone": "(11)51252-4214",
        "password": "sash!414",
        "createdAt": "2017-05-29T09:12:33.001Z",
        "updatedAt": "2017-05-29T09:12:33.001Z",
        "isAdmin": false,
        "isActive": false
      }
    )
  )
}
