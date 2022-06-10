const UserService = require("../services/UserService");
const utils = require("../utils/utils");

module.exports ={
  async createUser(req, res){
    const matchDocument = {
      username: req.body.username,
      email: req.body.email,
      pwd: await utils.encryptPwd(req.body.pwd), //Senha é salva criptografada com bcrypt
      created_in: new Date()
    };

    UserService.create(matchDocument, (err, result) => {
      if (err) {
        res.status(400).send('Erro ao criar um novo usuário!');
      } else {
        console.log(`Um novo usuário foi inserido com o id ${result.insertedId}`);
        res.status(204).send();
      }
    });
  },

  async getUser(req, res){
    const user = await UserService.getUserById(req.params.id);
    if(user){
      res.status(200).send(user);
    }else{
      res.status(404).send("Usuário não encontrado!");
    }
  },
}