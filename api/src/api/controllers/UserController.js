const UserService = require("../services/UserService");

module.exports = {
    listAll: function (req, res) {
      res.statusCode = 200;
      UserService.getAllUser().then(users => {
          res.set("Content-Type", "application/json");
          res.send(JSON.stringify(users));
      })
    },

    add: function (req, res) {
      UserService.addNewUser(req.body).then((status) => {
        res.set("Content-Type", "application/json");
        res.statusCode = status.codeStatus;
        res.send(JSON.stringify(status.status));
      }).catch(error => {
        res.statusCode = 500;
        res.set("Content-Type", "application/text");
        res.send(error.message);
      });
    },

    get: function (req, res) {
      const userId = req.params.user_id;
      UserService.getUserById(userId).then((status) => {
        res.set("Content-Type", "application/json");

        if(user){
          res.statusCode = status.codeStatus;
          res.send(JSON.stringify(status.status));                    
        } else{
          res.statusCode = 404;
          res.send({status: `Não foi possível encontrar o usuário para ${userId}.`});
        }                
      });
    },

    update: function (req, res) {
      UserService.updateUser(req.body, req.params.user_id).then((status) => {
        res.statusCode = status.codeStatus;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status.status));
      });
    },

    remove: function (req, res) {
      UserService.removeUserById(req.params.user_id).then((status) => {
        res.statusCode = status.codeStatus;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status.status));
      });
    }
}