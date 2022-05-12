const User = require("./model/User");

// Classe que serve de banco de dados temporário. Será substituído pelo ORM.
class Banco {
    constructor() {
      this.users = []
    }

    getAllUsers() {
      return this.users;
    }

    addUser(novoUser) {
      if(novoUser instanceof User){
        const user = this.users.filter(x => x.id == novoUser.id)[0];

        if(user){
          throw Error("Usuário já existe");
        }

        this.users.push(novoUser)
      }else{
        throw Error("DB: invalid input, object invalid")
      }
    }

    findByUserId(userId) {
      const user = this.users.filter(x => x.id == novoUser.id)[0];

      if(user === -1){
        throw Error();
      }

      return user;
    }

    updateUser(novoUser, userId) {
      if(novoUser instanceof User){
        const user = this.users.findIndex(x => x.id == userId);

        if(user === -1){
          throw Error("Usuário não encontrado");
        }

        novoUser.id = userId;
        this.users[user] = novoUser;
      }else{
        throw Error("DB: invalid input, object invalid")
      }
    }

    removeByUserId(userId) {
      const user = this.users.findIndex(x => x.id == userId);

      if(user === -1){
        throw Error();
      }

      return this.users.splice(user, 1);
    }
}

let banco = new Banco();

module.exports = banco;