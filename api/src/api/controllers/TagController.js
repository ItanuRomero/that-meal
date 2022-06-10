const Tag = require("../repositories/database/model/Tag");

module.exports = {
  async listAll(request, response) {
    try {
      const id = request.params.recipe_id;
      const tags = await Tag.findAll({ where: { recipe_id: id } });

      response.status(200).json(tags);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      await Tag.create(request.body);
      
      response.status(202).json("Tag criada");
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
