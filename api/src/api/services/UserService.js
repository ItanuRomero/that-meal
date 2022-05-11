const UserRepository = require("../repositories/UserRepository");

module.exports = {
    getAllUser: async function (){
      return await UserRepository.all();
    },

    getUserById: async function (userId){
      return await UserRepository.find(userId);
    },

    addNewUser: async function (user){
      const data = await UserRepository.create(user);
      if(data){
        return {codeStatus: 201, status: "Usuário criado com sucesso."};
      } 

      return {codeStatus: 404, status: "Não foi possível criar o usuário"};
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
      const status = await UserRepository.remove(userId);
      if(status){
        return {status: "Usuário removido com sucesso."};
      } 

      return {status: "Usuário não encontrado."};
    }
}