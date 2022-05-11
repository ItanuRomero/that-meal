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

    update(novoUser, userId) {
      if(novoUser instanceof User){
        const user = this.users.findIndex(x => x.id == userId);

        if(user === -1){
          throw Error("Não existe esse usuário");
        }

        novoUser.id = userId;
        this.users[user] = novoUser;
      }else{
        throw Error("DB: Objeto não é do tipo User")
      }
    }

    removeByUserId(userId) {
      return this.users.splice(this.items.findIndex(x => x.id == userId), 1);
    }
}

let banco = new Banco();

module.exports = banco;