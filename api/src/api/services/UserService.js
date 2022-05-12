const UserRepository = require("../repositories/UserRepository");

module.exports = {
    getAllUser: async function (){
      return await UserRepository.all();
    },

    getUserById: async function (userId){
      try{
        const user = await UserRepository.find(userId);
        return {codeStatus: 201, status: user};
      }catch{
        return {codeStatus: 404, status: "Usuário não encontrado"};
      }
    },

    addNewUser: async function (user){
      try{
        await UserRepository.create(user);
        return {codeStatus: 201, status: user};
      }
      catch(e){
        if(e.message.startsWith("DB:")){
          return {codeStatus: 400, status: e.message};
        }else{
          return {codeStatus: 404, status: e.message};
        }
      } 
    },

    updateUser: async function (user, userId){
      try{
        await UserRepository.update(user, userId);
        return {codeStatus: 201, status: "Usuário atualizado com sucesso"};
      }
      catch(e){
        if(e.message.startsWith("DB:")){
          return {codeStatus: 400, status: e.message};
        }else{
          return {codeStatus: 404, status: e.message};
        }      
      } 
    },
    
    removeUserById: async function(userId) {
      try{
        await UserRepository.remove(userId);
        return {codeStatus: 204, status: "Usuário desativado com sucesso"};
      } 
      catch{
        return {codeStatus: 404, status: "Usuário não encontrado"};
      }
    }
}