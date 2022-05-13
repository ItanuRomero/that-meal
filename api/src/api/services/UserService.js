const UserRepository = require("../repositories/UserRepository");

module.exports = {
    getAllUsers: async function (){
      return await UserRepository.all();
    },

    getUserById: async function (userId){
      try{
        const user = await UserRepository.find(userId);
        return {codeStatus: 200, status: user};
      }catch{
        return {codeStatus: 404, status: "Error: Usuário não encontrado"};
      }
    },

    addNewUser: async function (user){
      try{
        const newUser = await UserRepository.create(user);
        return {codeStatus: 201, status: newUser};
      }
      catch(e){
        return {codeStatus: 400, status: "Error: " + e.message};
      } 
    },

    updateUser: async function (user, userId){
      try{
        await UserRepository.update(user, userId);
        return {codeStatus: 201, status: "Usuário atualizado com sucesso"};
      }
      catch(e){
        if(e.message.startsWith("DB:")){
          return {codeStatus: 400, status: "Error: " + e.message};
        }else{
          return {codeStatus: 404, status: "Error: " + e.message};
        }      
      } 
    },
    
    removeUserById: async function(userId) {
      try{
        await UserRepository.remove(userId);
        return {codeStatus: 202, status: "Usuário desativado com sucesso"};
      } 
      catch{
        return {codeStatus: 404, status: "Error: Usuário não encontrado"};
      }
    }
}