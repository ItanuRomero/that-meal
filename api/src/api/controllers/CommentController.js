const Comment = require("../repositories/database/model/Comment");

module.exports = {
  async listAll(request, response) {
    try {
      const id = request.params.recipe_id;
      const comments = await Comment.findAll({ where: { recipe_id: id } });

      response.status(200).json(comments);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      await Comment.create(request.body);
      response.status(200).json("product inserted!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
};