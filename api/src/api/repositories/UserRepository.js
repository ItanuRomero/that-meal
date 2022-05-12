const database = require("./database/database");
const User = require("./database/model/User");
const UserSeed = require("./database/seed/UserSeed");

class UserRepository{
    constructor(){
      UserSeed(database);
      this.database = database;
    }

    async create(user){
      const newUser = new User(user);
      database.addUser(newUser);
      return newUser;
    }

    async update(user, userId){
      const newUser = new User(user);
      database.updateUser(newUser, userId);
      return newUser;
    }

    async find(userId){
      return database.findByUserId(userId);
    }

    async all(){
      return database.getAllUsers();
    }

    async remove(userId){
      return database.removeByUserId(userId);
    }
}

module.exports = new UserRepository();