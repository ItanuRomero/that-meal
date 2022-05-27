const User = require("../repositories/database/model/User");

// module.exports = {
//     listAll: function (req, res) {
//       UserService.getAllUsers().then(users => {
//         res.statusCode = 200;
//         res.set("Content-Type", "application/json");
//         res.send(JSON.stringify(users));
//       })
//     },

//     add: function (req, res) {
//       UserService.addNewUser(req.body).then((status) => {
//         res.statusCode = status.codeStatus;
//         res.set("Content-Type", "application/json");
//         res.send(JSON.stringify(status.status));
//       });
//     },

//     get: function (req, res) {
//       const userId = req.params.user_id;
//       UserService.getUserById(userId).then((status) => {
//         res.statusCode = status.codeStatus;
//         res.set("Content-Type", "application/json");
//         res.send(JSON.stringify(status.status));                    
//       });
//     },

//     update: function (req, res) {
//       UserService.updateUser(req.body, req.params.user_id).then((status) => {
//         res.statusCode = status.codeStatus;
//         res.set("Content-Type", "application/json");
//         res.send(JSON.stringify(status.status));
//       });
//     },

//     remove: function (req, res) {
//       UserService.removeUserById(req.params.user_id).then((status) => {
//         res.statusCode = status.codeStatus;
//         res.set("Content-Type", "application/json");
//         res.send(JSON.stringify(status.status));
//       });
//     }
// }


module.exports = {
  async listAll(request, response) {
    try {
      const users = await User.findAll();
      response.status(200).json(users);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      await User.create(request.body);
      response.status(200).json("product inserted!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.user_id;
      const user = await User.findOne({ where: { id } });

      if (!user) {
        return response.status(400).json("Product not found");
      }
      response.status(200).json(user);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { username, email, birth, phone, password, createdAt, updatedAt, isAdmin, isActive } = request.body;
      const id = request.params.user_id;
      const user = await User.findOne({ where: { id } });

      if (!user) {
        return response.status(400).json("Product not found");
      }
      user.username = username;
      user.email = email,
      user.birth = birth,
      user.phone = phone,
      user.password = password,
      user.createdAt = createdAt,
      user.updatedAt = updatedAt,
      user.isAdmin = isAdmin,
      user.isActive = isActive

      await user.save();
      response.status(200).json("product uptated!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async remove(request,response){
    try {
      const id = request.params.user_id;
      const user = await User.destroy({ where: { id } });
      if (!user) {
        return response.status(400).json("Product not found");
      }
      response.status(200).json("product removed!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  }
};
