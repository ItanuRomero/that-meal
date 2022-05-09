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
        this.users.push(novoUser)
      }else{
        throw Error("DB: Objeto não é do tipo User")
      }
    }

    findByUserId(userId) {
      return this.users.filter(x => x.id == userId)[0];
    }

    removeByUserId(userId) {
      return this.users.splice(this.items.findIndex(x => x.id == userId), 1);
    }
}

let banco = new Banco();

module.exports = banco;