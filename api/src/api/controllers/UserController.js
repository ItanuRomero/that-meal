const UserService = require("../services/UserService");

module.exports = {
    listAll: function (req, res) {
      UserService.getAllUsers().then(users => {
        res.statusCode = 200;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(users));
      })
    },

    add: function (req, res) {
      UserService.addNewUser(req.body).then((status) => {
        res.statusCode = status.codeStatus;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status.status));
      });
    },

    get: function (req, res) {
      const userId = req.params.user_id;
      UserService.getUserById(userId).then((status) => {
        res.statusCode = status.codeStatus;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status.status));                    
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
