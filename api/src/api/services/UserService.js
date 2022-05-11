const UserRepository = require("../repositories/UserRepository");

module.exports = {
    getAllUser: async function (){
      return await UserRepository.all();
    },

    getUserById: async function (userId){
      return await UserRepository.find(userId);
    },

    addNewUser: async function (user){
      try{
        await UserRepository.create(user);
        return {codeStatus: 201, status: "Usuário criado com sucesso."};
      }
      catch(e){
        return {codeStatus: 404, status: "Não foi possível criar o usuário"};
      } 
    },

    updateUser: async function (user, userId){
      try{
        await UserRepository.update(user, userId);
        return {codeStatus: 201, status: "Usuário alterado com sucesso."};
      }
      catch(e){
        return {codeStatus: 404, status: "Não foi possível alterar o usuário"};
      } 
    },
    
    removeUserById: async function(userId) {
      try{
        await UserRepository.remove(userId);
        return {codeStatus: 201, status: "Usuário removido com sucesso."};
      } 
      catch(e){
        return {codeStatus: 404, status: "Usuário não encontrado."};
      }
    }
}