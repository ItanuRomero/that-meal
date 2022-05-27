const User = require("../repositories/database/model/User");

module.exports = {
  async listAll(request, response) {
    try {
      const users = await User.findAll();

      response.status(200).json(users);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      const user = await User.create(request.body);

      response.status(201).json(user);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.user_id;
      const user = await User.findOne({ where: { id } });

      if (!user) {
        return response.status(404).json("Usuário não encontrado");
      }

      response.status(200).json(user);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { username, email, birth, phone, password, createdAt, updatedAt, isAdmin, isActive } = request.body;
      const id = request.params.user_id;
      const user = await User.findOne({ where: { id } });

      if (!user) {
        return response.status(404).json("Usuário não encontrado");
      }

      user.username = username;
      user.email = email;
      user.birth = birth;
      user.phone = phone;
      user.password = password;
      user.createdAt = createdAt;
      user.updatedAt = updatedAt;
      user.isAdmin = isAdmin;
      user.isActive = isActive;

      await user.save();
      response.status(201).json("Usuário atualizado com sucesso");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async remove(request,response){
    try {
      const id = request.params.user_id;
      const user = await User.destroy({ where: { id } });

      if (!user) {
        return response.status(404).json("Usuário não encontrado");
      }

      response.status(202).json("Usuário desativado com sucesso");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
