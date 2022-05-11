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
          throw Error("Já existe esse usuário");
        }

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
      const user = this.users.findIndex(x => x.id == userId);

      if(user === -1){
        throw Error("Não existe esse usuário");
      }

      return this.users.splice(user, 1);
    }
}

let banco = new Banco();

module.exports = banco;