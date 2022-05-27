const Comment = require("../repositories/database/model/Comment");

module.exports = {
  async listAll(request, response) {
    try {
      const comments = await Comment.findAll();
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
  async get(request, response) {
    try {
      const id = request.params.comment_id;
      const comment = await Comment.findOne({ where: { id } });

      if (!comment) {
        return response.status(400).json("Product not found");
      }
      response.status(200).json(comment);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { text, user_id, recipe_id } = request.body;
      const id = request.params.comment_id;
      const comment = await Comment.findOne({ where: { id } });

      if (!comment) {
        return response.status(400).json("Product not found");
      }

      comment.text = text;
      comment.user_id = user_id,
      comment.recipe_id = recipe_id,

      await comment.save();
      response.status(200).json("product uptated!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async remove(request,response){
    try {
      const id = request.params.comment_id;
      const comment = await Comment.destroy({ where: { id } });
      if (!comment) {
        return response.status(400).json("Product not found");
      }
      response.status(200).json("product removed!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  }
};
